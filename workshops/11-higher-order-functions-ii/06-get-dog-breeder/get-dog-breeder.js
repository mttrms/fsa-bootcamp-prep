function getDogBreeder(name = 'Steve', age = 0) {
  return function dogBreeder (breederName = name, breederAge = age) {
  if (typeof breederName === 'number') {
    breederAge = breederName;
    breederName = name;
  }
  
  let dog = {
    name: breederName,
    age: breederAge
  };
  return dog;
}
}