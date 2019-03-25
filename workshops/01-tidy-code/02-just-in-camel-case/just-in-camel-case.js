// YOUR CODE BELOW
function justInCamelCase(undername) {
  let camelcaseoutput = '';
  let foundUnder = false;

  for (let i = 0; i < undername.length; i++) {
    if (undername[i] === '_') {
      foundUnder = true;
      } else {
        if (foundUnder) {
        camelcaseoutput += undername[i].toUpperCase();
      foundUnder = false;
    } else {
      camelcaseoutput += undername[i];
      }
  }
  }
      return camelcaseoutput;
}