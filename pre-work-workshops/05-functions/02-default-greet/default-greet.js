// YOUR CODE BELOW

const defaultGreet = function (firstName, lastName = 'Doe') {
  // if (lastName === undefined) {
  //   lastName = 'Doe';
  // }
  return `Hi ${firstName} ${lastName}!`;
}