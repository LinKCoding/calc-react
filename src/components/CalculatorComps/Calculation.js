import React from 'react'
import Col from 'react-bootstrap/Col'


const Calculation = (props) => {
  return (
    <Col>
      <p data-testid="calculation"><span>Calculated:</span> {props.calculation}</p>
    </Col>
  )
}

export default Calculation