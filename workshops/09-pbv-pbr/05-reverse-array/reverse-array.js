// YOUR CODE BELOW

const reverseArray = (arr) => {
  let dupeArr = []
  for (let i = 0; i < (arr.length + dupeArr.length); i++) {
    dupeArr.push(arr.pop());
  }

  for (let i = 0; i < dupeArr.length; i++) {
    arr[i] = dupeArr[i];
  }
  
  return arr;
}