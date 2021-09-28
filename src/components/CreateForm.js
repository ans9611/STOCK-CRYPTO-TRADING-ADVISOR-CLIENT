import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductForm = ({ product, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='countInStock'>
      <Form.Label>CountInStock</Form.Label>
      <Form.Control
        name='countInStock'
        value={product.countInStock}
        onChange={handleChange}
      />
    </Form.Group>
    <Button type='submit'>Buy Now!</Button>
  </Form>
)

export default ProductForm
