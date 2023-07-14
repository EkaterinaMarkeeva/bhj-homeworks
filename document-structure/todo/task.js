const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tasksList.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
  
  const taskTitles = Array.from(document.querySelectorAll('.task__title'));  
  const tasks = Array.from(document.querySelectorAll('.task'));
  const taskRemoves = Array.from(document.querySelectorAll('.task__remove'));
  let titles = taskInput.value.trim();

  if (titles.length > 0) {
    taskTitles[taskTitles.length - 1].textContent = titles;
  } else {
    tasks[tasks.length - 1].remove();
  }
  
  taskRemoves[taskTitles.length - 1].addEventListener('click', () => {
    tasks[taskTitles.length - 1].remove();
  });

  form.reset();
});
