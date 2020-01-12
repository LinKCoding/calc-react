import React from 'react'

export default class CalcButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>{this.props.char}</h1>
    )
  }
}