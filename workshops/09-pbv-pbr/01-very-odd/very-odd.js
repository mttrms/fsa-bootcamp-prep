// YOUR CODE BELOW
function veryOdd(anArray) {
  let newArray = [];
  for(let i = 0; i < anArray.length; i++) {
    if (anArray[i] % 2 === 1) {
      newArray.push(anArray[i]);
    }
  }
  return newArray;
}