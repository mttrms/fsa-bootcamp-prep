function callThemAll (object, value) {
  let returnedValues = [];
  for (let key in object) {
    let currentValue = object[key];

    if (typeof currentValue === 'function') {
      returnedValues.push(currentValue(value));
    }
  }
  return returnedValues;
}