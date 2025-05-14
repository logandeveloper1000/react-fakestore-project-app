import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchProduct, updateProduct } from '../api/api'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ title: '', price: '', description: '', category: '' })
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchProduct(id).then(res => {
      setFormData({
        title: res.data.title,
        price: res.data.price,
        description: res.data.description,
        category: res.data.category,
      })
      setLoading(false)
    })
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProduct(id, formData).then(() => {
      setSuccess(true)
      setTimeout(() => navigate('/products'), 1500)
    })
  }

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>

  return (
    <div>
      <h2>Edit Product</h2>
      {success && <Alert variant="success">Product updated successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" value={formData.category} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">Update Product</Button>
      </Form>
    </div>
  )
}

export default EditProduct
