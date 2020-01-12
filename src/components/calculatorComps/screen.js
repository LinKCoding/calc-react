import React from 'react'

export default class Screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: this.props.calculation
    }
  }

  render() {
    return (
      <h1>[${this.display}]</h1>
    )
  }
}