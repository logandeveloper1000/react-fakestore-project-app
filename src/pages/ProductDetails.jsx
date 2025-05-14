import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProduct, deleteProduct } from '../api/api'
import { Card, Button, Spinner, Alert, Modal } from 'react-bootstrap'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchProduct(id)
      .then(res => setProduct(res.data))
      .catch(() => setError('Failed to load product'))
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = () => {
    deleteProduct(id)
      .then(() => {
        setShowModal(false)
        navigate('/products')
      })
      .catch(() => setError('Failed to delete product'))
  }

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <>
      <Card>
        <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
          <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
          <Button variant="warning" as={Link} to={`/edit-product/${id}`} className="me-2">
            Edit
          </Button>
          <Button variant="danger" onClick={() => setShowModal(true)}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      {/* Confirm Delete Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProductDetails
