import React from 'react'
import ButtonList from './ButtonList'
import Screen from './Screen'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'],
      equation: '',
    }
  }

  addToEquation = (newChar) => {
    this.setState({
      equation: this.state.equation + newChar
    })
  }

 
  render() {
    const { equation } = this.state
    const result = /\d/.test(equation[equation.length-1]) ? eval(equation) : equation
    return (
      <React.Fragment>
        <Screen equation={equation} calculation={result}/>
        <ButtonList chars={this.state.chars} addToEquation={this.addToEquation}/>
      </React.Fragment>
    )
  }
}