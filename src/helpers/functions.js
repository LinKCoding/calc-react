export const validateInput = (input) => {
  return Boolean(input.match(/^[\(\)\d\+-\/\* ]+$/g))
}

// export default ValidateInput