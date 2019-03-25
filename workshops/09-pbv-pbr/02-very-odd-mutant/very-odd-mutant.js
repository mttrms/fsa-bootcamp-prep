// YOUR CODE BELOW

function veryOddMutant(anArray) {
  let count = 0;

  for (let i = 0; i < anArray.length; i++) {
    if(anArray[i] % 2 === 0) {
      anArray.splice(i,1,'normie');
      count += 1;
    }
  }
  return count;
}