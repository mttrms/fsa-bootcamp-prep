const rotateArray = (originalArray, rotateNum) => {
  

  if (rotateNum === 0) {
    return originalArray;
  } else if (rotateNum < 0) {
    rotateNum += originalArray.length;
  }

  let rotatedArray = originalArray.splice(originalArray.length - rotateNum, originalArray.length);

  // for (let i = 0; i < originalArray.length; i++) {
  //   rotatedArray.push(originalArray[i]);
  // }

  return rotatedArray.concat(originalArray);

}