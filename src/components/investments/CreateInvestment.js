import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import InvestmentForm from '../shared/InvestmentForm'

import { createInvestment } from '../../api/investments'

class CreateInvestment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      balance: '',
      description: '',
      risk: ''
    }
  }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history } = this.props

  createInvestment(this.state, user)
    .then((res) => history.push('/investments/' + res.data.investment.id))
    .then(() =>
      msgAlert({
        heading: 'Investment',
        message: 'Investment made',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Investment Failed',
        message: 'fail ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <>
      <h3>Enter your investment</h3>
      <InvestmentForm
        investment={this.state}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    </>
  )
}
}

export default withRouter(CreateInvestment)
