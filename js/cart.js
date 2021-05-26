/* import { cartArray } from "./js/constants/cartList.js";
console.log(cartArray);

const productsContainer = document.querySelector(".products");

cartArray.forEach(function(products) {
   productsContainer.innerHTML +=
   `
   <div class="product">
      <h2>${product.name}</h2>
      <div style="background-image: url(${product.image}) class="product-image")></div>
      <div class="product-price">${product.price}</div>
      <button class="product-button" data-product=${product.id}"">Add to cart</button>
   </div>
   `
}) 

const buttons = document.querySelector(".buybtn");
buttons.forEach(function(button){
   button.onclick = (function(event){
      console.log(event.target.dataset);
   }
})*/ 