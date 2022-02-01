/*
    Zadanie:
    - Wyświetl w czacie nick podany na górze strony
    - Po wpisaniu wiadomości wyczyść pole tekstowe
    - Jeśli nie podano nicku, a użytkownik próbuje wyłać wiadomość,
    powinien zobaczyć błąd
    - Jeśli nie podano nicku, albo pole od wiadomościu jest puste,
    przycisk wyślij ma być wyszarzony
*/

const chat = document.getElementById("chat");
const message = document.getElementById("message");

function send() {
    const msg = message.value;
    chat.innerHTML += `<div><b>You</b>: ${msg}</div>`;
}