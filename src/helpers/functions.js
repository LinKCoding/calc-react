const CheckInput = (input) => {
  return input.match(/^[\(\)\d\+-\/\* ]+$/g) ? input : false
}

export default CheckInput