// YOUR CODE BELOW
const arraySum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (Array.isArray(element)) {
      sum += arraySum(element)
    } else {
      sum += element;
    }
  }
  return sum;
}