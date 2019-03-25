const lastFridayNight = (arr) => {
  
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {    
    let regret = arr[i];
    total += regret.amount;
  }
  
  return total;
}