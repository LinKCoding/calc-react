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
        <h3>[Calculating:{this.topDisplay}]</h3>
        <h1>[Calculated: ...]</h1>
      </React.Fragment>
    )
  }
}