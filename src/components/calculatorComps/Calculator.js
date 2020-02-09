import React from 'react'
import ButtonList from './ButtonList'
import Screen from './Screen'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CheckInput from '../../helpers/functions'


export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', 'C' , '+'],
      equation: '',
    }
  }

  addToEquation = (newChar) => {
    this.setState({
      equation: this.state.equation + newChar
    })
  }

  handleInput = e => {
    const { value } = e.target
    if(CheckInput(value)) {
      this.setState({
        equation: value,
      })
    }
  }

  handleClear = () => {
    this.setState({
      equation: ""
    })
  }
 
  render() {
    const { equation } = this.state
    let result 
    try {
      result = eval(equation)
    } catch (e) {
      result = this.state.equation
    }
    return (
      <Container style={{ backgroundColor: '#f5f5dc', marginTop: '10%', width:'40%'}}>
        <Row>
          <Screen equation={equation} handleInput={this.handleInput} calculation={result}/>
        </Row>
        <hr></hr>
        <Row>
          <ButtonList chars={this.state.chars} addToEquation={this.addToEquation} handleClear={this.handleClear}/>
        </Row>
      </Container>
    )
  }
}