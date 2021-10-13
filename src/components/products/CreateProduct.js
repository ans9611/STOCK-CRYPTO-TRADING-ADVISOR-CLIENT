import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProductForm from '../shared/ProductForm'

import { createProduct } from '../../api/products'

class CreateProduct extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      CountInStock: ''
    }
  }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history } = this.props

  createProduct(this.state, user)
    .then((res) => history.push('/products/' + res.data.product.id))
    .then(() =>
      msgAlert({
        heading: 'Product Added!',
        message: 'Product Added',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Product Added failed',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <>
      <h3>Add your product</h3>
      <ProductForm
        product={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    </>
  )
}
}

export default withRouter(CreateProduct)
