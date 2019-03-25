// YOUR CODE BELOW

const deeperCopy = (arr) => {
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arrCopy[i] = arr[i].slice(); 
    } else {
      arrCopy[i] = arr[i]
    } 
  }
  return arrCopy;
}

deeperCopy(['apples', ['bananas', 'citrus']])