const img = document.getElementById('snowImg');
const canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
const ctx = canvas.getContext('2d');

function draw() {
    const t = new Date().getTime() / 1000;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.drawImage(img, 150 + Math.sin(t) * 50, 150);

    window.requestAnimationFrame(draw);
}
draw();