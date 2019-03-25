let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW

tacoCatInc.currentInventory = function () {
  let inventoryValue = 0;
  
  for (let key in tacoCatInc) {
    let category = tacoCatInc[key];
    
    for (let product in category) {
       inventoryValue += category[product].cost * category[product].quantity;     
      }
    }
  
  return inventoryValue;
  
}

tacoCatInc.cash = 0;

tacoCatInc.sale = function(order) {
  let orderPrice = 0;
    for (let category in order) {
      let itemPurchased = order[category];
      
      this.cash += tacoCatInc[category][itemPurchased].cost
      orderPrice += tacoCatInc[category][itemPurchased].cost
      tacoCatInc[category][itemPurchased].quantity-=1;
      
      
  }
  return orderPrice;
}