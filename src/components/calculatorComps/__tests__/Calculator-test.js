import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Calculator from '../Calculator'

test('All calc buttons are visible', () => {
  const chars = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', 'C', '+']

  const { getAllByRole } = render(<Calculator />)

  expect(getAllByRole('button')).toHaveLength(chars.length)
})

// How to test button by button? 
// Should I give each button an id or a test-attr?

test('Calc buttons add to total', () => {
  const { getByTestId, getByText } = render(<Calculator />)

  const firstNum = Math.floor(Math.random() * 9)
  // const secondNum = Math.floor(Math.random() * 9)
  fireEvent.click(getByText(firstNum.toString()))
  // fireEvent.click(getByText('+'))
  // fireEvent.click(getByText(secondNum.toString()))

  console.log(getByTestId('equation'))

  expect(getByTestId('equation')).toHaveTextContent(`${firstNum}`)
  
  // expect(getByTestId('equation')).toHaveTextContent(`${firstNum}+${secondNum}`)
  
  // const solution = (firstNum + secondNum).toString()
  // expect(getByTestId('calculation')).toHaveTextContent(solution)
})

