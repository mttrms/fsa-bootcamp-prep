// YOUR CODE BELOW
const allSystemsGo = (obj) => {
  let systemReady = true;
  for (let key in obj) {
    debugger;
    if (typeof obj[key] === 'object') {
      debugger;
      systemReady = allSystemsGo(obj[key])
      
      if (systemReady === false) {
        return false;
      }
      
    } else {
      if (obj[key] === false) {
        return false;
      }
      // systemReady = (systemReady && obj[key])
    }
  }
  return systemReady;
}