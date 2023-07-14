const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tasksList.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
  
  const taskTitles = Array.from(document.querySelectorAll('.task__title'));
  taskTitles[taskTitles.length - 1].textContent = taskInput.value;
  
  const tasks = Array.from(document.querySelectorAll('.task'));
  const taskRemoves = Array.from(document.querySelectorAll('.task__remove'));
  
  for (let i = 0; i < tasks.length; i += 1) {
    taskRemoves[i].addEventListener('click', () => {
      tasks[i].remove();
    });
  }

  form.reset();
});
