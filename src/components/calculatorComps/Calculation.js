import React from 'react'
import Col from 'react-bootstrap/Col'


const Calculation = (props) => {
  return (
    <Col>
      Calculated: {props.calculation}
    </Col>
  )
}

export default Calculation