import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { updateInvestment, showInvestment } from '../../api/investments'
import InvestmentForm from '../shared/InvestmentForm'

class UpdateInvestment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      investment: {
        balance: '',
        description: '',
        risk: ''
      }
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showInvestment(match.params.id, user)
      .then(res => this.setState({ investment: res.data.investment }))
      .then(() => msgAlert({
        heading: 'Show investment success',
        message: 'nvestment',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: ' investment failed',
        message: 'fail ' + err.message,
        variant: 'danger'
      }))
  }

  handleChange = (event) => {
    const userInput = { [event.target.name]: event.target.value }
    this.setState(currState => {
      return { investment: { ...currState.investment, ...userInput } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateInvestment(this.state.investment, match.params.id, user)
      .then(res => history.push('/investments/' + match.params.id))
      .then(() => msgAlert({ heading: 'Investment Updated!', message: 'investment updated', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Investment update failed',
          message: 'fail ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <h3>Update Investment</h3>
        <InvestmentForm
          investment={this.state.investment}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default withRouter(UpdateInvestment)
