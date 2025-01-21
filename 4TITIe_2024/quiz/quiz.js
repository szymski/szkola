const obiekt = {
    pytanie: "Ile to jest 2+2?",
    odpowiedzi: [
        "3",
        "4",
        "2",
        "5",
    ],
    poprawna: 1,

    // To samo co obiekt.print = function() {}
    print() {
        console.log(this.pytanie);

        for(const odp of this.odpowiedzi) {
            console.log(odp);
        }
    }
};

console.log(obiekt);

obiekt.print();
