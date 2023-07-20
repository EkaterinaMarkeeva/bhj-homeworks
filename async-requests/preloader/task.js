const xhr = new XMLHttpRequest();
const imgLoader = document.getElementById('loader');
const items = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        imgLoader.classList.remove('loader_active');

        const xhrResponse = JSON.parse(xhr.responseText);
        
        for (let key in xhrResponse.response.Valute) {
            items.insertAdjacentHTML('beforeend', '<div class="item"><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div></div>');
            let itemCodes = Array.from(document.querySelectorAll('.item__code'));
            let itemValues = Array.from(document.querySelectorAll('.item__value'));

            itemCodes[itemCodes.length - 1].textContent = xhrResponse.response.Valute[key].CharCode;
            itemValues[itemValues.length - 1].textContent = xhrResponse.response.Valute[key].Value;
        }
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
