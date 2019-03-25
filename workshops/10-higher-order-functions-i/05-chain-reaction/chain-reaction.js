// YOUR CODE BELOW

const chainReaction = (value, arr) => {
  arr.forEach(function (callback) {
    value = callback(value);
  })
  return value;
}