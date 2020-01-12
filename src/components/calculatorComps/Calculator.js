import React from 'react'
import ButtonList from './ButtonList'
import Screen from './Screen'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'],
      equation: '',
    }
  }

  runCalculation() {
    return eval(this.state.equation)
  }

  render() {
    this.runCalculation()
    return (
      <React.Fragment>
        <Screen equation={this.state.equation} calculation={this.runCalculation(this.state.equation)}/>
        <ButtonList chars={this.state.chars} />
      </React.Fragment>
    )
  }
}