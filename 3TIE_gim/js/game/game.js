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

function setPointsPerSecond(value) {
    pointsPerSecond = value;
    perSecondLabel.innerHTML = Math.round(value);
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
    let savedPoints = localStorage.getItem("points");
    if (savedPoints) {
        points = parseInt(savedPoints);
    }
}

// Load game state when script starts
load();

//#endregion

//#region Shop

const items = [{
        name: "Generator ciastek",
        price: 100,
        pointsPerSecond: 1,
        image: "cookie.png",
        bought: 0,
    },
    {
        name: "Ciasteczkowy potwór",
        price: 500,
        pointsPerSecond: 10,
        image: "monster.png",
        bought: 0,
    },
];

function renderShopItems() {
    // Clear current items to prevent duplication
    itemsContainer.innerHTML = "";

    let index = 0;
    for (const item of items) {
        itemsContainer.innerHTML += `
<div class="item" onclick="onItemClick(items[${index}])">
    <img class="image" src="${item.image}" alt="">
    <div class="name">${item.name} (${item.bought})</div>
    <div class="price">${item.price} cookies</div>
</div>
`;
        index++;
    }
}

renderShopItems();

function onItemClick(item) {
    console.log("Buying item: ", item);

    if (points < item.price) {
        alert("You don't have enough cookies!");
        return;
    }

    // alert(`You bought ${item.name}!`);

    item.bought++;
    points -= item.price;
    setPointsPerSecond(pointsPerSecond + item.pointsPerSecond);
    item.price += Math.round(item.price * 0.1);

    renderShopItems();
}

//#endregion

//#region Debug functions

function resetPoints() {
    addPoints(-points);
}

//#endregion