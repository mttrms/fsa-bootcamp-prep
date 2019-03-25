// YOUR CODE BELOW

function crazyCaps(string) {
  let crazyCapped = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      crazyCapped += string[i].toUpperCase();
    } else {
      crazyCapped += string[i];
    }
  }
  return crazyCapped;
}