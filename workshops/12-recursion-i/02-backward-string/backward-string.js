// YOUR CODE BELOW

const backwardString = (str) => {
  if (!Array.isArray(str)) {
      str = str.split('');
  }
  
  if (str.length === 0) {
    return;
  } 
  
  console.log(str[str.length-1])
  str.pop();
  backwardString(str);
}