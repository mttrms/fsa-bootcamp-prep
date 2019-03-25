const mySplice = (arr, start, count, element) => {
  let newArr = [];
  let removed = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i < start) {
      newArr.push(arr[i])
    } else if (i >= start && i < start + count) {
      removed.push(arr[i])
    } else if (i === start + count && element) {
      newArr.push(element, arr[i]);
    } else {
      newArr.push(arr[i])
    }
  }
  
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i])
  }
  
  while (newArr.length !== arr.length) {
    arr.shift();
  }

  return removed;
}