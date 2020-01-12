import React from 'react'
import ButtonList from './ButtonList'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chars: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+']
    }
  }

  render() {
    return <ButtonList chars={this.state.chars} />
  }
}