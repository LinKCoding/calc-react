import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const CalcButton = (props) => {
  const { char } = props
  return (
    <Col onClick={() => props.addToEquation(char)}>
      <Button variant='info'>
        {char}
      </Button>
    </Col>
  )
}

export default CalcButton