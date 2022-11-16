const element = document.querySelector("#kontener");

function generuj(i) {
    const kolor = generujKolor(i);
    const margin = Math.sin(i * 0.2) * 100 + 100;
    element.innerHTML += `<span style="margin-left: ${margin}px; color: ${kolor}">Element ${i}</span><br/>`;
}

function generujKolor(i) {
    return `rgb(${(i * 137) % 255}, ${(i * 73) % 255}, ${(i * 137 * 1.6) % 255})`;
}

const section = (name) => {
    element.innerHTML += `<h4>${name}</h4>`;
}

section("while");
let i = 0;
while (true) {
    generuj(i);
    i++;
    if (i == 10) break;
}

i = 0;
while (i < 10) {
    generuj(i);
    i++;
}

i = 0;
while (i++ < 10) {
    generuj(i);
}

section("do while");
let x
do {
    x = (x || 0) + 1;
    generuj(x);
} while (x < 10)

section("for(let j = 0; j <= 10; j++)");
for (let j = 0; j <= 10; j++) {
    generuj(j);
}

section("for(; i <= 10; i++)");
i = 0;
for (; i <= 10; i++) {
    generuj(i);
}

section("for of");
const lista = [10, 12, 14, 13, 12, 11, 10];
for (const elem of lista) {
    generuj(elem);
}

section("for of 2");
const texts = ["tekst1", "tekst2", "dupa"];
for (let t of texts)
    element.innerHTML += `<span>${t}</span><br/>`;

section("for in");
for (const i in texts) {
    generuj(i);
}

section("To tyle");
for (let i = 1; i <= 100; i++)
    generuj(i);