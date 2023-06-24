const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

const addText = function () {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
};

cookie.onclick = function () {
    addText();

    if (clickerCounter.textContent % 2 !== 0) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
};