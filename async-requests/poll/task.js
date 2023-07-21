const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const xhrResponse = JSON.parse(xhr.response);

        pollTitle.textContent = xhrResponse.data.title;

        for (let elem of xhrResponse.data.answers) {
            pollAnswers.insertAdjacentHTML('beforeend', '<button class="poll__answer"></button>');
            const btnsAnswer = Array.from(document.querySelectorAll('.poll__answer'));
            btnsAnswer[btnsAnswer.length - 1].textContent = elem;

            btnsAnswer[btnsAnswer.length - 1].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');

            });
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
