const form = document.querySelector(".header-form");
const list = document.querySelector(".tasks-list");

const tasks = [];

function handleSubmit(event) {
  event.preventDefault();

  const taskName = event.target.elements.taskName.value;
  const taskDescription = event.target.elements.taskDescription.value;

  const task = {
    id: Date.now(),
    taskName,
    taskDescription,
  };
  tasks.push(task);
  renderTasks();
}
function renderTasks() {
  list.innerHTML = "";
  const markup = tasks
    .map(
      task => `
      <li class="task-list-item">
  <button class="task-list-item-btn">Delete</button>
  <h3>${task.taskName}</h3>
  <p>${task.taskDescription}</p>
  </li>
`
    )
    .join("");
  list.innerHTML = markup;
}

form.addEventListener("submit", e => handleSubmit(e));
