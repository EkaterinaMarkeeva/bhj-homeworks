const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

for (let elem of hasTooltips) {
    elem.onclick = function() {
        return false;
    }
}

function shew(arr) {
    for (let l = 0; l < arr.length; l += 1) {
        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = arr[l].title;
        arr[l].insertAdjacentElement('afterEnd', tooltip);
                
        arr[l].addEventListener('click', () => {
            const { bottom, left } = arr[l].getBoundingClientRect();
            tooltip.style.top = bottom + 'px';
            tooltip.style.left = left + 'px';
            
            let indexOf;
            let index;
            const tooltips = Array.from(document.querySelectorAll('.tooltip'));
            for (let i = 0; i < tooltips.length; i += 1) {
                if (tooltips[i].className.indexOf('active') > -1 ) {
                    indexOf = tooltips[i].className.indexOf('active');
                    index = i;
                }
            }

            if (indexOf > -1) {
                if (tooltips[index] === tooltip) {
                    tooltip.classList.toggle('tooltip_active');
                } else {
                    tooltips[index].classList.toggle('tooltip_active');
                    tooltip.classList.toggle('tooltip_active');
                }
            } else {
                tooltip.classList.add('tooltip_active');
            }
        })
    }
}

shew(hasTooltips);
