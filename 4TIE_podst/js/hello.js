const btn = document.getElementById("btn");
const container = document.querySelector("#container");

const lista = [
    "Tekst pierwszy",
    "Jan Paweł drugi",
    "<b>Jeszcze inny przykład</b>",
    "Co ja robie tu?",
    "Ostatni przykład",
];

let i = 0;
btn.onclick = function() {
    // i++;
    // if (i == lista.length) i = 0;

    let tekst = lista[i];
    i = (i + 1) % lista.length;
    container.innerHTML += tekst + "<br>";
};