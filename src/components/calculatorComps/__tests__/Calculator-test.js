import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Calculator from '../Calculator'
import CalcButton from '../CalcButton'

test('All calc buttons are visible', () => {
  const chars = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', 'C', '+']

  const { getAllByRole } = render(<Calculator />)

  expect(getAllByRole('button')).toHaveLength(chars.length)
})

// How to test button by button? 
// Should I give each button an id or a test-attr?

test('Calc buttons add to total',  () => {
  const { getByTestId, getByText } = render(<Calculator />)


  // How robust should this be?
  // Do I need to test for each number?
  // Each operation? 
  const firstNum = Math.floor(Math.random() * 9)
  const secondNum = Math.floor(Math.random() * 9)

  fireEvent.click(getByText(firstNum.toString()))
  fireEvent.click(getByText('+'))
  fireEvent.click(getByText(secondNum.toString()))

  const equation = getByTestId('equation')
  
  expect(equation.value).toBe(`${firstNum}+${secondNum}`)
  
  
  const solution = (firstNum + secondNum).toString()
  
  expect(getByTestId('calculation')).toHaveTextContent(solution)
})


it('fires the expected callback on click', () => {
  const props = {
    char: '3',
    addToEquation: jest.fn(),
    handleClear: jest.fn(),
  };
  const { getByText } = render(
    <CalcButton {...props} />
  );
  // Simulate the click of the button
  const button = getByText(props.char)
  fireEvent.click(button);
  expect(props.addToEquation).toHaveBeenCalled();
  expect(props.handleClear).not.toHaveBeenCalled();
});
