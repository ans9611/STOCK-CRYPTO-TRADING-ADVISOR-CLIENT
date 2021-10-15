import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showInvestment, deleteInvestment } from '../../api/investments'

import Button from 'react-bootstrap/Button'

class ShowInvestment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      investment: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showInvestment(match.params.id, user)
      .then((res) => this.setState({ investment: res.data.investment }))
      .then(() =>
        msgAlert({
          heading: 'Show investment success',
          message: 'Check out the investment',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show investment failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

handleDelete = (event) => {
  const { match, user, msgAlert, history } = this.props
  deleteInvestment(match.params.id, user)
    .then(() => history.push('/investments'))
    .then(() =>
      msgAlert({
        heading: 'Delete investment successfully',
        message: 'Investment is no more',
        variant: 'success'
      })
    )
    .catch((err) =>
      msgAlert({
        heading: 'Delete investment failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    )
}

render () {
  if (this.state.investment === null) {
    return 'Loading...'
  }

  const { balance, description, risk, owner } = this.state.investment
  const { history, match, user } = this.props

  return (
    <>
      <h3>Investment</h3>
      <h5>{balance} dollars</h5>
      <p>{risk}. Your added {description}</p>
      {user.id === owner && (
        <>
          <Button onClick={this.handleDelete}>Delete Investment</Button>
          <Button
            onClick={() => history.push(`/investments/${match.params.id}/edit`)}>
            Update Investment
          </Button>
        </>
      )}
    </>
  )
}
}

export default withRouter(ShowInvestment)
