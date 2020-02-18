import React from 'react'
import Col from 'react-bootstrap/Col'

const Equation = (props) => {
  return (
    // Add inputs here too
    <Col>
      <p>Equation:</p> <input data-testid="equation" style={{ width: "100%", outline: "none", border: "none" , borderRadius: "5px", backgroundColor: "black", color:"#39ff14", height:"40px"}} type="text" value={props.equation} onChange={props.handleInput}></input>

    </Col>
  )
}

export default Equation