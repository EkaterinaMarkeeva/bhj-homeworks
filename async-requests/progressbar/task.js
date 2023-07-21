const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 1) {
            progress.value = 0.25;
        } else if (xhr.readyState === 2) {
            progress.value = 0.5
        } else if (xhr.readyState === 3) {
            progress.value = 0.75;
        } else if (xhr.readyState === xhr.DONE) {
            progress.value = 1.0;
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(form);
    xhr.send(formData);
});