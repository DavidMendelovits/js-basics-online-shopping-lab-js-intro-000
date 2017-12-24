var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1;

  cart.push ({ [item]: price });

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const I = cart.length;

  if (!I) {
    console.log("Your shopping cart is empty.");
  }
  let itemsAndPrices = [];

  for (let i = 0; i < I; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice) [0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

switch(itemsAndPrices.length) {
  case 1:
    break;
  case 2:
    itemsAndPrices = itemsAndPrices.join(" and ");
    break;
  default:
    itemsAndPrices[I-1] = "and ".concat(itemsAndPrices[I-1]);
    itemsAndPrices = itemsAndPrices.join(", ");
}
  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
let t = 0;

for (let i = 0, I = cart.length; i < I; i++) {
  for (let item in cart[i]) {
    t += cart[i][item];
  }
}
  return t;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
