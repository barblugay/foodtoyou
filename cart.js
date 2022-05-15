function addToCart() {
  var cart = document.getElementById("cart");
  console.log(cart);
  cart.innerHTML = parseInt(cart.innerHTML) + 1;
}
