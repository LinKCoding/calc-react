import React from 'react'
import CalcButton from './CalcButton'

const ButtonList = (props) => {
  return (
    props.chars.map((char, idx) => {
      return <CalcButton key={`${char}-${idx}`} char={char}/>
    })
  )
}

export default ButtonList