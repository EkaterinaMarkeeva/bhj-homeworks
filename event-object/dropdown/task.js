const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__item');
const value = document.querySelector('.dropdown__value');

list.onclick = function () {            
    return false;
}

function toggleList() {
    list.classList.toggle('dropdown__list_active');
}

items.forEach(item => {
    item.addEventListener('click', () => {
        value.textContent = item.textContent;
        toggleList();
    })
})

value.addEventListener('click', toggleList);