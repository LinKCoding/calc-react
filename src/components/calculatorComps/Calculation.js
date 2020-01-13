import React from 'react'
import Col from 'react-bootstrap/Col'


const Calculation = (props) => {
  return (
    <Col>
      <span>Calculated:</span> {props.calculation}
    </Col>
  )
}

export default Calculation