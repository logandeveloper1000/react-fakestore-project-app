import { useState } from 'react'
import { createProduct } from '../api/api'
import { Form, Button, Alert } from 'react-bootstrap'

function AddProduct() {
  const [formData, setFormData] = useState({ title: '', price: '', description: '', category: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct(formData).then(() => setSuccess(true))
  }

  return (
    <div>
      <h2>Add New Product</h2>
      {success && <Alert variant="success">Product created successfully!</Alert>}
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
        <Button type="submit" variant="primary">Create Product</Button>
      </Form>
    </div>
  )
}

export default AddProduct
