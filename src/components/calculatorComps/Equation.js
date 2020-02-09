import React from 'react'
import Col from 'react-bootstrap/Col'

const Calculation = (props) => {
  return (
    <Col>
      <p>Equation:</p> <input style={{ width: "100%", outline: "none", border: "none" , borderRadius: "5px", backgroundColor: "black", color:"#39ff14", height:"40px"}} type="text" value={props.equation} onChange={props.handleInput}></input>

    </Col>
  )
}

export default Calculation