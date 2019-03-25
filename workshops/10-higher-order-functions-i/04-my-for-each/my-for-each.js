// YOUR CODE BELOW
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    callback(el, i);
  }
}