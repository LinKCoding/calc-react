import CheckInput from '../../helpers/functions'

describe('CheckInput Functionality', () => {
  it('allows for numbers to be included', () => {
    for(let i = 0; i < 10; i++) {
      expect(CheckInput(`${i}`)).toBe(`${i}`)
    }
  });

  it('allows for special chars to be included', () => {
    const chars = ['/', '*', '+', '-']
    chars.forEach(char => expect(CheckInput(char)).toBe(char))
  });

  it('doesn\'t allow characters to be included', () => {
    expect(CheckInput('a')).toBe(false)
    expect(CheckInput('b')).toBe(false)
    expect(CheckInput('z')).toBe(false)
  });

  it('multi-character strings', () => {
    expect(CheckInput('1+1')).toBe('1+1')
    expect(CheckInput('2b')).toBe(false)
    expect(CheckInput('alert("no")')).toBe(false)
  });
});
