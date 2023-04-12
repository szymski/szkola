const textEl = document.getElementById('text');
const canvas = document.getElementById('canvas');
/** @type CanvasRenderingContext2D */
const ctx = canvas.getContext('2d');

const { width, height } = canvas;

ctx.fillStyle = "red";

// ctx.translate(width / 2, height / 2);
// ctx.scale(width / 2 - 4, height / 2 - 4);

const scale = 0.01;
const maxIter = 64;

for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        // Niech 0-owy element będzie częścią rzeczywistą
        // a 1-wszy element będzie częścią urojoną
        let z = [x * scale - 1.5, y * scale - 1.5];
        let c = [x * scale - 1.5, y * scale - 1.5];

        let i = 0;
        for (i = 0; i < maxIter; i++) {
            // z = z^2 + c
            // a + bi
            // (a + bi)(a + bi) = a^2 - b^2 + 2abi
            const a = z[0];
            const b = z[1];
            z = [a * a - b * b + c[0], 2 * a * b + c[1]];
            const dist = Math.sqrt(z[0] * z[0] + z[1] * z[1]);

            if (dist > 2) {
                break;
            }
        }

        ctx.fillStyle = `rgb(${i * 4}, 0, 0)`;
        ctx.fillRect(x, y, 1, 1)
    }
}