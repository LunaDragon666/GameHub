import { cartArray } from "./js/constants/cartList.js";
console.log(cartArray);

const productsContainer = document.querySelector(".products");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];

cartArray.forEach(function(products) {
   productsContainer.innerHTML +=
   `
   <div class="product">
      <h5>${product.name}</h5>
      <div style="background-image: url(${cartElement.image}) class="product-image")></div>
      <div class="product-price">${product.price}</div>
      <button class="product-button" data-product=${product.id}"">Add to cart</button>
   </div>
   `
}) 

const buttons = document.querySelector(".buybtn");
buttons.forEach(function(button){
   button.onclick = (function(event){
      const itemToAdd = cartArray.find(item => item.id === event.target.dataset.product);
      cartArray.push(itemToAdd);
      showCart(cartArray);
      localStorage.setItem("cartList", JSON.stringify(cartArray));

      console.log(cartArray);
   }
});

function showCart(cartItems) {
   cart.style.display = "block";
   cartList.innerHTML = "";
   let total = 0;
   cartItems.forEach(function(cartElement){
      total += cartElement.price;
      cartList.innerHTML +=
      `
      <div class="cart-item">
         <h6>${cartElement.name}</h6>
         <img src="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
      </div>
      `
   })
totalContainer.innerHTML = `Total: ${total}`;
}
