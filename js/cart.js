import { gameList } from "./constants/gameList.js";

let cartArray = [];

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

const buttons = document.querySelectorAll(".buybtn");
buttons.forEach(function(button) {
    button.onclick = (function (event) {
        cartArray.push(event.target.dataset.id);

        localStorage.setItem("cartList", JSON.stringify(cartArray));
        showCart();
    });
});

function getCart() {
    const cart = localStorage.getItem("cartList");

    if(cart) {
        cartArray = JSON.parse(cart);
    }
}

getCart();

function showCart() {
    const games = gameList.filter(game => cartArray.includes(game.id));
    let total = 0;

    cartList.innerHTML = "";

    games.forEach(function(cartElement){
        total += parseFloat(cartElement.price);

        cartList.innerHTML += `
            <div class="cart-item">
             <h6>${cartElement.name}</h6>
             <img src="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
            </div>
        `;
    });

    totalContainer.innerHTML = `Total: ${total}`;
    cart.style.display = "flex";
}


// import { cartArray } from "./constants/cartList.js";
// console.log(cartArray);

// // const productsContainer = document.querySelector(".products");
// const cart = document.querySelector(".cart");
// const cartList = document.querySelector(".cart-list");
// const totalContainer = document.querySelector(".total");

// const buttons = document.querySelectorAll(".buybtn");

// buttons.forEach(function(button) {
//     button.onclick = (function (event) {
//         const id = event.target.dataset.id;
//         const itemToAdd = cartArray.find(item => item.id === id);

//         cartArray.push(itemToAdd);
//         showCart(cartArray);
//         localStorage.setItem("cartList", JSON.stringify(cartArray));

//         console.log(cartArray);
//     });
// });

// function showCart(cartItems) {
//    cart.style.display = "flex";
//    cartList.innerHTML = "";
//    let total = 0;
//    cartItems.forEach(function(cartElement){
//       total += cartElement.price;
//       cartList.innerHTML +=
//       `
//       <div class="cart-item">
//          <h6>${cartElement.name}</h6>
//          <p class="cart-detail">${cartElement.title}</p>
//          <img src="${cartElement.image}" alt="${cartElement.name}" class="cart-image">
//       </div>
//       `
//    })

// };