import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default class CalcButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { char } = this.props
    return (
      <Col onClick={() => this.props.addToEquation(char)}>
        <Button variant='info'>
          {char}
        </Button>
      </Col>
    )
  }
}