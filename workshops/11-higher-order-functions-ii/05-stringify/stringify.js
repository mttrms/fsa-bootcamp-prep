// YOUR CODE BELOW

const stringify = (callback) => {
  return function() {
    return callback().toString();
  }
}

// also works
// let callbackReturn = callback();
// return callbackReturn.toString();