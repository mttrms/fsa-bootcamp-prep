function myJoin(arr, separator=',') {
  let newString = '';
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === undefined || arr[i] === null) {
      newString += `${separator}`;
    } else {
      newString += `${arr[i]}${separator}`
    }
  }
  
  return newString.slice(0, newString.length - separator.length);
  
}