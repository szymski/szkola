const canvas = document.querySelector("#canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

function draw() {
    const time = new Date().getTime() / 1000;
    ctx.resetTransform();

    // drawAnimatedGraph();
    // drawExamples();
    drawClock();

}

// Wywołuje funkcję draw() 30 razy na sekundę (30 fps)
setInterval(draw, 1000 / 30);

const startTime = new Date().getTime() / 1000;

// Animowany zegar
function drawClock() {
    const time = new Date().getTime() / 1000;
    const elapsed = (time - startTime) * 10;

    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const size = canvas.height;
    const clockRadius = size / 2 * 0.9;
    const markerRadius = clockRadius * 0.8;

    ctx.fillStyle = "#e8dbc5";
    ctx.strokeStyle = "#947657";
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, clockRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    for (let i = 0; i < 12; i++) {
        const angle = Math.PI * 2 / 12 * i;

        ctx.strokeStyle = "#4f4f4f";
        ctx.lineWidth = i % 3 == 0 ? 15 : 10;

        ctx.resetTransform();

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle);
        ctx.translate(markerRadius, 0);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(i % 3 == 0 ? 35 : 20, 0);
        ctx.stroke();
    }
    ctx.resetTransform();

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, Math.PI * 2);
    ctx.fill();

    const minutesElapsed = elapsed % 3600 / 60;
    const hoursElapsed = elapsed % 86400 / 3600;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(minutesElapsed);
    ctx.strokeStyle = "#e02d2d";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(markerRadius + 28, 0);
    ctx.stroke();
    ctx.resetTransform();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(hoursElapsed);
    ctx.strokeStyle = "#314fd4";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(markerRadius * 0.5, 0);
    ctx.stroke();
    ctx.resetTransform();
}

// Przykładowe elementy
function drawExamples() {
    const time = new Date().getTime() / 1000;

    ctx.resetTransform();

    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2288ff";
    ctx.fillRect(50, 50, 300, 100);

    ctx.fillStyle = "orange";
    ctx.font = "30px Monaco";
    ctx.fillText("Hello World", 100, 200);

    // ctx.rotate(time % 100 * 0.2);

    ctx.strokeStyle = `hsl(20, 80%, 50%)`;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(20, 300);
    ctx.lineTo(250, 250 + Math.sin(time) * 50);
    ctx.lineTo(500, 350);
    ctx.lineTo(550, 50);
    ctx.stroke();

    ctx.fillStyle = "yellowgreen";
    ctx.beginPath();
    ctx.ellipse(220, 420, 50, 50, 0, 0, Math.PI * 2);
    // ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(400, 450, 70, 0, Math.PI * 1.5, false);
    ctx.stroke();
}

// // Animowany sinusoidowy wykres
function drawAnimatedGraph() {
    const time = new Date().getTime() / 1000;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    let lastY = 0;
    for (let x = 0; x < 800; x += 5) {
        const t = (x / 800 - 0.5) * 2 * 5;

        const y = 150 * Math.cos(t * 5 + time * 5) * Math.pow(Math.E, -(t * t / 2));
        // ctx.lineWidth = (y / 50) ** 2 + 0.5;

        if (x > 0) {
            ctx.strokeStyle = `hsl(${x}, 80%, 50%)`;
            ctx.beginPath();
            ctx.moveTo(x, 200 + lastY);
            ctx.lineTo(x + 5, 200 + y);
            ctx.stroke();
        }

        lastY = y;
    }

    // ctx.fillStyle = "red";
    // ctx.fillRect(150 + Math.sin(time) * 50, 50, 150, 150);
}