import React from 'react';
import Calculator from './CalculatorComps/Calculator'

export default class Overlay extends React.Component {
  constructor (props) {
    super(props) 
  }

  render() {
    return <Calculator />
  }
}