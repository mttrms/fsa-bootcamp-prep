const callCount = () => {
  let count = 0;
  return function() {
    return count += 1;
  }
}