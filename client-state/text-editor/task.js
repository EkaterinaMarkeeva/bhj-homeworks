const editor = document.getElementById('editor');
let localText = localStorage.getItem('text');

editor.addEventListener('change', () => {
    localStorage.setItem('text', editor.value);
    console.log(localStorage.text);
});

if (localText) {
    editor.textContent = localText;
}