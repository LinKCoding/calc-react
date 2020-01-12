import React from 'react'

export default class CalcButton extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const char = this.props.char
    return (
      <h1 onClick={() => this.props.addToEquation(char)}>{char}</h1>
    )
  }
}