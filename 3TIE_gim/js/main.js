const btn = document.getElementById("btn");
const pole = document.getElementById("pole");

btn.onclick = function() {
    let wartosc = pole.value;
    
    if(wartosc == "msg") {
        alert("Witaj!");
    }

    pole.value = "1234";
};
