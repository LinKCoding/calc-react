import React from 'react'
import Calculation from './Calculation'
import Equation from './Equation'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 const Screen = (props) => {
  return (
    <Col>
      <Row>
        <Equation equation={ props.equation }/>
      </Row>
      <Row>
        <Calculation calculation={ props.calculation }/>
      </Row>
    </Col>
  )

}

export default Screen