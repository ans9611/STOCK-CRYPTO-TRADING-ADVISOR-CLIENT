import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createProduct } from '../api/products'
import ProductForm from '../components/CreateForm'

class CreateProduct extends Component {
  constructor (props) {
    super(props)

    this.state = {
      countInStock: ''
    }
  }

handleChange = (event) => {
  // The event.target of this event will be an input element
  // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
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
        message: 'Thank you for purchasing products',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Product log failed :(',
        message: 'Nope ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <>
      <h3>Buy</h3>
      <ProductForm
        run={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    </>
  )
}
}

export default withRouter(CreateProduct)
