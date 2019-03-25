const arrayFlattener = (arr) => {
  let oneDimensional = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (Array.isArray(element)) {
        for (let j = 0; j < element.length; j++) {
      oneDimensional.push(element[j]);
      
    } 
        } else {
      oneDimensional.push(element);
    }
}
  return oneDimensional;
}
  