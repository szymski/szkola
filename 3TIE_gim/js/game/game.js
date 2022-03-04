const cookieButton = document.querySelector("#cookieButton");
const pointsLabel = document.querySelector("#pointsLabel");
const perSecondLabel = document.querySelector("#perSecondLabel");

let points = 0;
let pointsPerSecond = 0.1;

perSecondLabel.innerHTML = pointsPerSecond;

cookieButton.onclick = () => {
    addPoints(pointsPerSecond);
};

function addPoints(number) {
    points += number;
    pointsLabel.innerHTML = Math.round(points);
}

setInterval(() => {
    addPoints(pointsPerSecond * 0.1);
}, 100);