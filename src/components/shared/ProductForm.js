import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductForm = ({ product, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='name'>
      <Form.Label>Name</Form.Label>
      <Form.Control
        name='Name'
        value={product.name}
        placeholder='Add name of the product'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='price'>
      <Form.Label>Price</Form.Label>
      <Form.Control
        onChange={handleChange}
        name='price'
        value={product.price}
        placeholder='Add price'
      />
    </Form.Group>
    <Form.Group controlId='CountInStock'>
      <Form.Label>CountInStock</Form.Label>
      <Form.Control
        onChange={handleChange}
        name='CountInStock'
        value={product.CountInStock}
        placeholder='CountInStock'
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ProductForm
