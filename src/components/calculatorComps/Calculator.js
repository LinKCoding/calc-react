import React from 'react'
import ButtonList from './ButtonList'
import Screen from './Screen'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', 'C' /* '=' */, '+'],
      equation: '',
    }
  }

  addToEquation = (newChar) => {
    this.setState({
      equation: this.state.equation + newChar
    })
  }

  handleInput = (e) => {
    this.setState({
      equation: e.target.value,
    })
  }

 
  render() {
    const { equation } = this.state
    let result 
    try {
      result = eval(equation)
    } catch (e) {
      result = "Invalid equation"
    }
    return (
      <Container style={{ backgroundColor: '#f5f5dc', marginTop: '10%'}}>
        <Row>
          <Screen equation={equation} handleInput={this.handleInput} calculation={result}/>
        </Row>
        <hr></hr>
        <Row>
          <ButtonList chars={this.state.chars} addToEquation={this.addToEquation}/>
        </Row>
      </Container>
    )
  }
}