const element = document.querySelector("#kontener");

function generuj(a) {
    console.log(a);
    const x = a;
    const y = a;
    const kolor = generujKolor(x);
    element.innerHTML += `<div style="background: ${kolor}; width: 16px; height: 16px; position: absolute; left: ${x}px; top: ${y}px;">${Math.floor(x)},${Math.floor(y)}</div>`;
}

function generujKolor(i) {
    return `rgb(${(i * 137) % 255}, ${(i * 73) % 255}, ${(i * 137 * 1.6) % 255})`;
}

let segments = 36;
let step = Math.PI * 2 / segments;
for (let a = 0; a < Math.PI * 2; a += step) {
    generuj(a);
}