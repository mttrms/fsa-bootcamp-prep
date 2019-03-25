// Do this with an object to track previous arg and outputs

function cacheSavings (callback) {
  let previousArg 
  let previousOutput


  
  return function (arg) {
    if (arg === previousArg) {
      return previousOutput
    }
    previousOutput = callback(arg);
    previousArg = arg;
    console.log(previousArg, 'prevarg');
    console.log(previousOutput, 'prevoutput');
    return previousOutput;
  }
}