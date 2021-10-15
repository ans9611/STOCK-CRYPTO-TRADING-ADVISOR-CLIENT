import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const InvestmentForm = ({ investment, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='balance'>
      <Form.Label>Balance</Form.Label>
      <Form.Control
        required
        name='balance'
        value={investment.balance}
        placeholder='Enter Your Investment'
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='description'>
      <Form.Label>Description</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='description'
        value={investment.description}
        placeholder='Add description'
      />
    </Form.Group>
    <Form.Group controlId='risk'>
      <Form.Label>Risk</Form.Label>
      <Form.Control
        onChange={handleChange}
        required
        name='risk'
        value={investment.risk}
        placeholder='Enter your Risk Aversion'
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default InvestmentForm
