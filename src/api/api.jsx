import axios from 'axios'

const API = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

// API functions
export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/${id}`)
export const createProduct = (product) => API.post('/products', product)
export const updateProduct = (id, product) => API.put(`/products/${id}`, product)
export const deleteProduct = (id) => API.delete(`/products/${id}`)
