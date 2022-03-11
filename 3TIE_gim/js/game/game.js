// HTML Elements
const cookieButton = document.querySelector("#cookieButton");
const pointsLabel = document.querySelector("#pointsLabel");
const perSecondLabel = document.querySelector("#perSecondLabel");
const itemsContainer = document.querySelector("#items");

// Game variables
let points = 0;
let pointsPerSecond = 1;

//#region HTML event handlers

cookieButton.onclick = onCookieClick;

//#endregion

// Point functions

function onCookieClick() {
    addPoints(pointsPerSecond);
}

function addPoints(number) {
    points += number;
    pointsLabel.innerHTML = Math.round(points);
}

// Timer for adding points per second,
// called 10 times per second, to make a smooth animation.
setInterval(() => {
    addPoints(pointsPerSecond * 0.1);
}, 100);

//#region State saving/loading

// Save game state every 10 seconds
setInterval(() => {
    save();
}, 10000);

function save() {
    console.log("Saving game to local storage");
    localStorage.setItem("points", points);
}

function load() {
    console.log("Loading game from local storage");
    points = parseInt(localStorage.getItem("points"));
}

// Load game state when script starts
load();

//#endregion

//#region Shop

const items = [{
        name: "Generator ciastek",
        price: 100,
        pointsPerSecond: 1,
        image: "cookie.png"
    },
    {
        name: "Ciasteczkowy potwór",
        price: 500,
        pointsPerSecond: 10,
        image: "monster.png"
    },
];

function renderShopItems() {
    for (const item of items) {
        itemsContainer.innerHTML += `
<div class="item">
    <img class="image" src="${item.image}" alt="">
    <div class="name">${item.name}</div>
    <div class="price">${item.price} cookies</div>
</div>
`;
    }
}

renderShopItems();

//#endregion