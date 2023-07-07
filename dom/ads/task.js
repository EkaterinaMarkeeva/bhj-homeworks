const rotatorsCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

let t = setInterval(function() {
    rotatorsCase[index].classList.remove('rotator__case_active');
  if (index < rotatorsCase.length - 1) {
    index += 1;
    rotatorsCase[index].classList.add('rotator__case_active');
    rotatorsCase[index].style.color = rotatorsCase[index].getAttribute('data-color');
  } else {
    index = 0;
    rotatorsCase[index].classList.add('rotator__case_active');
    rotatorsCase[index].style.color = rotatorsCase[index].getAttribute('data-color');
  }
}, 1000)
