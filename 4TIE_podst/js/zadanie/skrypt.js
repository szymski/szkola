const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const hidden = document.querySelector(".hidden");

btn.onclick = () => {
    const text = input.value.toLowerCase();
    if (text == "hello") {
        hidden.classList.add("show");
        setTimeout(() => {
            hidden.classList.remove("show");
            setTimeout(() => {
                window.location = "http://n.szymekk.me";
            }, 2000)
        }, 5000);
    } else {
        alert("Zle!");
    }
}