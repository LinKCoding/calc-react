import React from 'react'
import Col from 'react-bootstrap/Col'

const Calculation = (props) => {
  return (
    <Col>
      Equation: {props.equation}
    </Col>
  )
}

export default Calculation