import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/api'
import ProductCard from '../components/ProductCard'
import { Row, Col, Spinner, Alert } from 'react-bootstrap'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
      .then(res => setProducts(res.data))
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <div>
      <h2 className="text-center mb-4">Explore Our Products</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductList
