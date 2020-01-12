import React from 'react'
import CalcButton from './CalcButton'
import Row from 'react-bootstrap/Row'


const ButtonRow = (props) => {
  return (
    <Row>
      {props.row.map((char, idx) => {
        return <CalcButton key={`${char}-${idx}`} char={char} addToEquation={props.addToEquation} />
      })}
    </Row>
  )
}

export default ButtonRow