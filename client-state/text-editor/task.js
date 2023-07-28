const editor = document.getElementById('editor');
let localText = localStorage.getItem('text');

editor.addEventListener('change', () => {
    localStorage.setItem('text', editor.value);
});

if (localText) {
    editor.textContent = localText;
}
