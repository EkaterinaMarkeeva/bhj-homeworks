const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole( index ) {
    return document.getElementById(`hole${index}`);
};


for (let index = 1; index < 9; index += 1) {
    let hole = getHole( index );

    hole.onclick = function () {
        if (hole.className === 'hole hole_has-mole') {
            dead.textContent = Number(dead.textContent) + 1;

            if (dead.textContent == 10) {
                alert ('Вы победили!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            
            if (lost.textContent == 5) {
                alert ('Вы проиграли!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    } 
}
