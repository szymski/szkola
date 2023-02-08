const textEl = document.getElementById('text');
const canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
const ctx = canvas.getContext('2d');

const { width, height } = canvas;

ctx.fillStyle = "red";

ctx.translate(width / 2, height / 2);
ctx.scale(width / 2 - 4, height / 2 - 4);

ctx.fillRect(0, 0, 1, 0.02);

ctx.strokeStyle = "blue";
ctx.lineWidth = 0.02;
ctx.beginPath();
ctx.ellipse(0, 0, 1, 1, 0, 0, 2 * Math.PI);
ctx.stroke();

let pointCount = 0;
let pointInCircleCount = 0;

function generatePoint() {
    pointCount++;
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;

    const distance = Math.sqrt(x * x + y * y);
    ctx.fillStyle = "red";
    if (distance <= 1) {
        ctx.fillStyle = "green";
        pointInCircleCount++;
    }

    ctx.fillRect(x, y, 0.01, 0.01);

    textEl.innerHTML = `Punkty: ${pointCount}<br>`;
    textEl.innerHTML += `Punkty w kółku: ${pointInCircleCount}<br>`;
    textEl.innerHTML += `Pi = ${pointInCircleCount / pointCount * 4}`;
}

setInterval(() => {
    for (let i = 0; i < 1; i++) {
        generatePoint();
    }
}, 1);

// ctx.resetTransform();