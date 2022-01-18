const input = document.getElementById("input");

function add(text) {
    let value = input.value;
    const czyOstatniZnakToPrzecinek = value[value.length - 1] == ",";
    if (czyOstatniZnakToPrzecinek && text == ",") {
        alert("Nie mozna wpisac dwoch przecinkow");
    } else {
        input.value += text;
    }
}

function calculate() {
    let value = input.value;
    value = value.replaceAll(",", ".")
    input.value = eval(value);
}