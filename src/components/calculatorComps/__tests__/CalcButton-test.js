import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import CalcButton from '../CalcButton'

test('button displays correct text', () => {
  const testChars = ['0', '1', '*', 'C'] 

  testChars.forEach(char => {
    const { getByText } = render(<CalcButton char={char} />)

    expect(getByText(char)).toHaveTextContent(char)


  })

  // another assertion: give another prop (addToEquation) 
  // where value of prop is Jest.fn
  // const const { getByText } = render( <CaclButton ...propr>)
  // expect(props..adToquation).toHaveBeenCalled() 
})