const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');


for (let i = 0; i <= 360; i++) {
    const x = 150 + Math.cos(i / 180 * Math.PI) * 120 + Math.sin(i * 0.4) * 10
    const y = 150 + Math.sin(i / 180 * Math.PI) * 120 + Math.cos(i * 0.4) * 10

    c.fillStyle = `hsl(${i}, 50%, 50%)`;
    c.fillRect(x, y, 10, 10);
}