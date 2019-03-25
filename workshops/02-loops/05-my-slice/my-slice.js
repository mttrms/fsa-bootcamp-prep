// YOUR CODE BELOW
let mySlice = function(originalString, startIdx, endIdx) {
  let newString = '';
  for (let i = startIdx || 0; i < originalString.length; i++) {
    if (i === endIdx) {
      break;
    }
    newString += originalString[i];
    
  }
  return newString;
}