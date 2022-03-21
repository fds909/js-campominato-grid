/*
    Generare una griglia di gioco quadrata, simile a quella dello screenshot,
    in cui ogni cella contiene un numero tra 1 e 100.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

    Bonus
    Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
    con difficoltà 1 => tra 1 e 100
    con difficoltà 2 => tra 1 e 81
    con difficoltà 3 => tra 1 e 49

*/

grid = document.getElementById("grid");

// generazione delle celle
for (let i = 1; i <= 100; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.innerHTML = i;
    grid.appendChild(box);

    box.addEventListener('click', 
        function () {
            // debug
            console.log(this);
            this.classList.add('clicked');
        }
    );
}