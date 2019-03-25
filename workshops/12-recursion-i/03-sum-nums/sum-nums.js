const sumNums = (num) => {
  if (num < 1) {
    return 0;
  }
  return num + sumNums(num - 1);
}