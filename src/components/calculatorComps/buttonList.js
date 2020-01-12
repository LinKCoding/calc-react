import React from 'react'
import ButtonRow from './ButtonRow'
import Col from 'react-bootstrap/Col'

const ButtonList = (props) => {
  const sortedButtons = []
  for (let i = 0; i < props.chars.length; i += 4) {
    sortedButtons.push(props.chars.slice(i, i + 4))
  }
  return (
    <Col>
      {sortedButtons.map((row, idx) => {
        return <ButtonRow key={`${row}-${idx}`} row={row} addToEquation={props.addToEquation} />
      })}
    </Col>
  )
}

export default ButtonList