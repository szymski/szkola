const tresc = document.querySelector(".tresc");

const listaElementow = document.querySelectorAll(".divek");

let i = 0;
for (const el of listaElementow) {
    i++;
    el.style.background = `hsl(${i * 20}, 100%, 50%)`;
    el.innerHTML = `Element ${i}`;
    el.style.marginLeft = `${Math.sin(i * 0.3) * 100 + 120}px`;
}

// const lista = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty"];
//
// for(let i = 0; i < lista.length; i++) {
//     const item = lista[i];
//     tresc.innerHTML += `<div>${i} - ${item}</div>`;
// }
//
// // foreach
// for(const item of lista) {
//     tresc.innerHTML += `<div>${item}</div>`;
// }

/*
for(let i = 0; i < 50; i++) {
    // Pomijanie liczb parzystych
    if(i % 2 == 0) {
        continue;
    }

    const style = `background: hsl(${i * 30}, 100%, 50%)`;
    tresc.innerHTML += `<div style="${style}">${i}</div>`;
}

let i = 0;
while(true) {
    const style = `background: hsl(${i * 30}, 100%, 50%)`;
    tresc.innerHTML += `<div style="${style}">while ${i}</div>`;

    i++;
    if(i > 30) {
        // Wychodzi z pętli
        break;
    }
}
*/