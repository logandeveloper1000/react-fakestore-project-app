import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '70vh' }}>
      <h1 className="mb-4">Welcome to <span style={{ color: '#0d6efd' }}>FakeStore</span></h1>
      <p className="mb-4" style={{ fontSize: '1.25rem', color: '#6c757d' }}>
        Your one-stop shop for high-quality fake products!
      </p>
      <Button as={Link} to="/products" variant="primary" size="lg">
        Browse Products
      </Button>
    </div>
  )
}

export default Home
