// YOUR CODE BELOW
function mySlice (array1, startIdx = 0, endIdx = array1.length ) {
  let copyArray = [];
  if (startIdx < 0){
    startIdx = startIdx + array1.length
  }
  if (endIdx < 0) {
    endIdx = endIdx + array1.length
  }
  for (i = startIdx; i < endIdx; i++) {
    copyArray.push(array1[i])
  }
  console.log(array1)
  console.log(copyArray, startIdx, endIdx)
 return copyArray 
}