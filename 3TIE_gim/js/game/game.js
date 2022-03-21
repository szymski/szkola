// HTML Elements
const cookieButton = document.querySelector("#cookieButton");
const pointsLabel = document.querySelector("#pointsLabel");
const perSecondLabel = document.querySelector("#perSecondLabel");
const itemsContainer = document.querySelector("#items");
const leaderboardContainer = document.querySelector("#leaderboard-container");

// Game variables
let points = 0;
let pointsPerSecond = 0;

setPointsPerSecond(1);

//#region HTML event handlers

cookieButton.onclick = onCookieClick;

//#endregion

// Point functions

function onCookieClick(event) {
    addPoints(pointsPerSecond);
    addPointsEffect(event.clientX, event.clientY, pointsPerSecond);
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

//#region Leaderboard

function updateLeaderboard(data) {
    leaderboardContainer.innerHTML = "";

    for (const player of data) {
        leaderboardContainer.innerHTML += `
        <div class="player-row">
            <span class="player-name">${player.name}</span>
            <span class="player-score">${Math.round(player.points)}</span>
        </div>
`;
    }
}

setInterval(() => {
    // Load other players' score
    fetch("http://game.szymekk.me/leaderboard")
        .then(response => response.json())
        .then(json => {
            updateLeaderboard(json);
        });

    // Send our score to the server
    fetch("http://game.szymekk.me/leaderboard/send", {
        method: "POST",
        body: JSON.stringify({
            name: "Szymekk",
            points: points
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}, 1000);

//#endregion

//#region Effects

function addPointsEffect(x, y, number) {
    const el = document.createElement("span");
    el.className = "effect";
    el.innerHTML = `+${number}`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 5000);
}

//#endregion

//#region Debug functions

function resetPoints() {
    addPoints(-points);
}

//#endregion