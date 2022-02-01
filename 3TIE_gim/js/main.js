/*
    Zadanie:
    - Wyświetl w czacie nick podany na górze strony
    - Po wpisaniu wiadomości wyczyść pole tekstowe
    - Jeśli nie podano nicku, a użytkownik próbuje wysłać wiadomość,
    powinien zobaczyć błąd
    - Jeśli nie podano nicku, albo pole od wiadomości jest puste,
    przycisk wyślij ma być wyszarzony
*/

const chat = document.getElementById("chat");
const message = document.getElementById("message");
const nickinput = document.getElementById("nickinput");
const btn = document.getElementById("btn");

nickinput.oninput = function() {
    sprawdzCzyMoznaWyslac();
};

message.oninput = function() {
    sprawdzCzyMoznaWyslac();
};

function send() {
    const msg = message.value;
    const nick = nickinput.value;

    if(!nick) {
        chat.innerHTML += `<div><b style="color: red">Nie podano nicku!</b></div>`;    
    }
    else {
        chat.innerHTML += `<div><b>` + nick + `</b>: ${msg}</div>`;
        message.value = "";
        sprawdzCzyMoznaWyslac();
    }
}

function sprawdzCzyMoznaWyslac() {
    btn.disabled = !message.value || !nickinput.value;
}

sprawdzCzyMoznaWyslac();