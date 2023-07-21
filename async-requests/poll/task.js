const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const card = document.querySelector('.card');
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
                pollAnswers.remove();

                const xhrPost = new XMLHttpRequest();
                xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrPost.send(`vote=${xhrResponse.id}&answer=${btnsAnswer.length - 1}`);
                xhrPost.addEventListener('readystatechange', () => {
                    if (xhrPost.readyState === xhr.DONE) {
                        const xhrPostResponse = JSON.parse(xhrPost.response);
                        console.log(xhrPostResponse.stat);
                        
                        for (let elem of xhrPostResponse.stat) {
                            card.insertAdjacentHTML('beforeend', '<div class="stat"><div class="stat__answer"></div><div class="stat__votes"></div></div>');
                            const answers = Array.from(document.querySelectorAll('.stat__answer'));
                            const votes = Array.from(document.querySelectorAll('.stat__votes'));

                            answers[answers.length - 1].textContent = elem.answer + ':';
                            votes[votes.length - 1].textContent = elem.votes + '%';
                        }
                    }
                });
            });
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
