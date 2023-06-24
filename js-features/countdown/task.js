const timer = document.getElementById("timer");

const reduceText = function () {
    timer.textContent -= 1;
    
    if (timer.textContent == 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!')
    }
};

const intervalId = setInterval(reduceText, 1000);
