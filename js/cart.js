const plusFunction = id => {
  // console.log(a);
  cart[id]++
  if (isNaN(cart[id])) {
    cart[id] = 1;
    console.log(cart[id]);
  }
  renderCart()
}
const minusFunction = id => {
  // console.log(a);
  cart[id]--
  renderCart()
  if (cart[id] == 0){
    deleteFunction(id);
    // renderCart(id);
    return true
  }
}
const renderCart = () => {
  console.log(cart);
}
const deleteFunction = id => {
  delete cart[id];
  renderCart();
}
let cart = {
  bomb1: 3,
  bomb2: 1,
  // bomb3: 0
}
document.onclick = event => {
 // увеличение количества товаров
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id)
  }
   //уменьшение количества товаров
   else {
    // else {
    // console.log(cart[id]);
      minusFunction(event.target.dataset.id)
    // }
  }
}

function addToCart() {
  return cart
}
