function changeDisplayed() {
    const reveal = Array.from(document.querySelectorAll('.reveal'));
    for (let elem of reveal) {
        const { top, bottom } = elem.getBoundingClientRect();

        if (bottom > 0 && top < window.innerHeight) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
    }
}

document.addEventListener('scroll', changeDisplayed);
