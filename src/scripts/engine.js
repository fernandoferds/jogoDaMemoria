const emojis = [
    "🐱‍👤",
    "🐱‍👤",
    "🐱‍🏍",
    "🐱‍🏍",
    "🐱‍🚀",
    "🐱‍🚀",
    "🐱‍👓",
    "🐱‍👓",
    "🐱‍💻",
    "🐱‍💻",
    "🐱‍🐉",
    "🐱‍🐉",
    "😿",
    "😿",
    "😹",
    "😹"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
let viewVidas = document.querySelector("#vidas");
let valueVidas = 9;
viewVidas.textContent = valueVidas;



for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.id = [i];
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    console.log(this.classList.length);

    if (this.classList.length < 2) {
        if (openCards.length < 1) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }


        if (openCards.length < 2 && openCards[0].id != this.id) {
            this.classList.add("boxOpen");
            openCards.push(this);
        }
        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
        }
    }

}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        //console.log(openCards[0].classList[3]);
        // console.log(openCards[1].classList[3]);
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        valueVidas = valueVidas - 1;
        viewVidas.textContent = valueVidas;
        console.log(valueVidas);
        // console.log(openCards[0].classList[3]);
        // console.log(openCards[1].classList[3]);

    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        let won = document.createElement("div");
        won.className = "tela-final";
        won.innerHTML = '<h1>VOCÊ VENCEU!!!</h1> <button onclick="window.location.reload()">RESET GAME</button>'
        document.querySelector(".container").appendChild(won);

    } else if (valueVidas == 0) {
        let won = document.createElement("div");
        won.className = "tela-final";
        won.innerHTML = '<h1>VOCÊ PERDEU 😿</h1> <button onclick="window.location.reload()">RESET GAME</button>'
        document.querySelector(".container").appendChild(won);
    }
}