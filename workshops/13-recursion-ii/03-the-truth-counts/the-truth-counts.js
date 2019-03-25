// YOUR CODE BELOW

const theTruthCounts = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if(Array.isArray(element)) {
      count += theTruthCounts(element)
    } else {
      if (element) {
        count++
      }
    }
  }
  return count;
}