import React from 'react'
import Col from 'react-bootstrap/Col'

export default class CalcButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { char } = this.props
    return (
      <Col xs={3} onClick={() => this.props.addToEquation(char)}>{char}</Col>
    )
  }
}