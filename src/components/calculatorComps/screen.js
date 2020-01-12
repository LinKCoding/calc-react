import React from 'react'

export default class Screen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topDisplay: this.props.equation,
      display: this.props.calculated
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>[Calculating:{this.props.equation}]</h3>
        <h1>[Calculated: ... {this.props.calculation}]</h1>
      </React.Fragment>
    )
  }
}