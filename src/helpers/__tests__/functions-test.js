import { validateInput } from '../../helpers/functions'

describe('validateInput Functionality', () => {
  it('allows for numbers to be included', () => {
    for(let i = 0; i < 10; i++) {
      expect(validateInput(`${i}`)).toBe(true)
    }
  });

  it('allows for special chars to be included', () => {
    const chars = ['/', '*', '+', '-']
    chars.forEach(char => expect(validateInput(char)).toBe(true))
  });

  it('doesn\'t allow characters to be included', () => {
    expect(validateInput('a')).toBe(false)
    expect(validateInput('b')).toBe(false)
    expect(validateInput('z')).toBe(false)
  });

  it('multi-character strings', () => {
    expect(validateInput('1+1')).toBe(true)
    expect(validateInput('2b')).toBe(false)
    expect(validateInput('alert("no")')).toBe(false)
  });
});
