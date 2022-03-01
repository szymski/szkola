const canvas = document.querySelector("#canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

function draw() {
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

// Wywołuje funkcję draw() 30 razy na sekundę (30 fps)
setInterval(draw, 1000 / 30);

// // Animowany sinusoidowy wykres
// function drawAnimatedGraph() {
//     const time = new Date().getTime() / 1000;

//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 3;

//     let lastY = 0;
//     for (let x = 0; x < 800; x += 5) {
//         const t = (x / 800 - 0.5) * 2 * 5;

//         const y = 150 * Math.cos(t * 5 + time * 5) * Math.pow(Math.E, -(t * t / 2));
//         // ctx.lineWidth = (y / 50) ** 2 + 0.5;

//         if (x > 0) {
//             ctx.strokeStyle = `hsl(${x}, 80%, 50%)`;
//             ctx.beginPath();
//             ctx.moveTo(x, 200 + lastY);
//             ctx.lineTo(x + 5, 200 + y);
//             ctx.stroke();
//         }

//         lastY = y;
//     }

//     // ctx.fillStyle = "red";
//     // ctx.fillRect(150 + Math.sin(time) * 50, 50, 150, 150);
// }