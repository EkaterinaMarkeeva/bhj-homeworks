const fontSize = Array.from(document.querySelectorAll('.font-size'));
const colorText = Array.from(document.querySelectorAll('.book__control_color .color'));
const backgroundColor = Array.from(document.querySelectorAll('.book__control_background .color'));
const bookControl = document.querySelector('.book__controls');
const book = document.getElementById('book');

console.log(colorText);
console.log(fontSize);
console.log(backgroundColor);

bookControl.onclick = function() {
    return false;
}

function registerEvents(arr, activeClassName = 'font-size_active', stylesName = 'book_fs-', attributeName = 'data-size') {
    for (let elem of arr) {
        elem.addEventListener('click', function() {

            for (let i = 0; i < arr.length; i += 1) {
                let indexOf = arr[i].className.indexOf('active');
                
                if (indexOf > -1) {
                    arr[i].classList.remove(activeClassName);
                    book.classList.remove(stylesName + arr[i].getAttribute(attributeName));
                }
            }
    
            elem.classList.add(activeClassName);
            book.classList.add(stylesName + elem.getAttribute(attributeName));
        });
    }
}

registerEvents(fontSize);
registerEvents(colorText, 'color_active', 'book_color-', 'data-text-color');
registerEvents(backgroundColor, 'color_active', 'book_bg-', 'data-bg-color');