import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexInvestments } from '../../api/investments'

class IndexInvestments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      investments: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexInvestments(user)
      .then((res) => this.setState({ investments: res.data.investments }))
      .then(() => console.log(this.state.investments))
      .then(() =>
        msgAlert({
          heading: 'success',
          message: 'the investments',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Fail',
          message: 'Fail ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const { investments } = this.state
    if (investments === null) {
      return 'Loading...'
    }

    let investmentJsx
    if (investments.length === 0) {
      investmentJsx = 'No investments'
    } else {
      investmentJsx = investments.map((investment) => (
        <li key={investment.id}>
          <Link to={`/investments/${investment.id}`}>{investment.balance} dollars</Link>
        </li>
      ))
    }

    return (
      <>
        <h3>Investments</h3>
        {investmentJsx}
      </>
    )
  }
}

export default IndexInvestments
