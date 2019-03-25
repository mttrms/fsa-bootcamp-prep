// YOUR CODE BELOW

const taxCalculator = function(price, state) {
  let taxRate;
  if(state === 'NY') {
    taxRate = .04;
  } else if (state === 'NJ') {
    taxRate = .06625;
  }

  return price + (price * taxRate);
}