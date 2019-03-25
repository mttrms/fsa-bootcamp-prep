// YOUR CODE BELOW

let exponentiate = function (base, power) {
  let currentValue = base;
  
  if (power === 0) {
    return 1;
  }

  for (let i = 1; i < power; i++) {
    currentValue = currentValue * base;
  }
  
  return currentValue;
}