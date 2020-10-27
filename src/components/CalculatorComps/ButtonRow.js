import React from 'react'
import CalcButton from './CalcButton'
import Row from 'react-bootstrap/Row'


const ButtonRow = (props) => {
  return (
    <Row style={{padding: "10px"}}>
      {props.row.map((char, idx) => {
        return <CalcButton key={`${char}-${idx}`} char={char} addToEquation={props.addToEquation} handleClear={props.handleClear}/>
      })}
    </Row>
  )
}

export default ButtonRow