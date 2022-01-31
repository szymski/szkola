const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const pole = document.getElementById("pole");
const p = document.getElementById("paragraf");

btn.onclick = function() {
    funkcja("Hello World!");
};

btn2.onclick = function() {
    const wartosc = pole.value;
    funkcja(wartosc);
};

function funkcja(msg) {
    p.innerHTML = "<b>" + msg + "</b>";
}