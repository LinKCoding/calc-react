import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const CalcButton = (props) => {
  const { char } = props
  return (
    <Col style={{ margin: '0 auto', width: '50%' }}>
      <Button style={{ margin: '0 auto', width: '50%' }} variant='info' onClick={() => props.addToEquation(char)}>
        {char}
      </Button>
    </Col>
  )
}

export default CalcButton