import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button as={Link} to={`/products/${product.id}`} variant="primary" className="mt-auto">
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
