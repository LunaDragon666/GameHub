// FEATURED GAMESHOP
import { gameList } from "./constants/gameList.js";

const gameContainer = document.querySelector(".gameitem");

gameList.forEach(game => {
    gameContainer.innerHTML += ` 
        <div class="game">
            <a class="wishbtn" href="#"><i class="fas fa-heart"></i></a>
            <img class="gamefeature" src="${game.image}" alt="${game.name}">
            <div class="box">
                <h3>${game.name}</h3>
                <p class="productdesc">${game.title}</p>
                <div class="shoptag">
                    <p class="price">$${game.price}</p>
                    <a class="buybtn" href="#" data-id="${game.id}">
                        <i class="fas fa-cart-plus" data-id="${game.id}"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

});

// . 