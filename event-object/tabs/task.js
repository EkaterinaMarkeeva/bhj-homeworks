const navigation = Array.from(document.querySelectorAll('.tab'));
const content = document.querySelectorAll('.tab__content');

for (let i = 0; i < navigation.length; i += 1) {   
    navigation[i].addEventListener('click', function() {

        for (let k = 0; k < navigation.length; k += 1) {
            let indexOf = navigation[k].className.indexOf('tab_active');

            if (indexOf > -1) {
                navigation[k].classList.remove('tab_active');
                content[k].classList.remove('tab__content_active');
            }
        }

        navigation[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    });
}
