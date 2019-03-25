// YOUR CODE BELOW

function billerBuilder (state) {
  let shipping;
  let tax;

  if (state === 'NY') {
    shipping = 1.03;
    tax = 1.04;
  } else if (state === 'NJ') {
    shipping = 1.05;
    tax = 1.06625;
  }

  return function (price) {
    return price * shipping * tax
  }

}