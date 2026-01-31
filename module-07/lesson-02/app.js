const form = document.querySelector(".header-form");
const list = document.querySelector(".tasks-list");
const themeBtn = document.getElementById("themeToggle");

let tasks = [];
getTasksFromLocal();
renderTasks();

function handleSubmit(event) {
  event.preventDefault();

  const taskName = event.target.elements.taskName.value;
  const taskDescription = event.target.elements.taskDescription.value;

  if (!taskName || !taskDescription) {
    alert("Fields cannot be empty!");
    return;
  }

  const task = {
    id: Date.now(),
    taskName,
    taskDescription,
  };
  tasks.push(task);
  saveToLocal();
  renderTasks();
}
function renderTasks() {
  list.innerHTML = "";
  const markup = tasks
    .map(
      task => `
      <li class="task-list-item" id='${task.id}'>
  <button class="task-list-item-btn">Delete</button>
  <h3>${task.taskName}</h3>
  <p>${task.taskDescription}</p>
  </li>
`
    )
    .join("");
  list.innerHTML = markup;
}
function deleteTask(event) {
  if (!event.target.closest(".task-list-item-btn")) return;
  const taskId = event.target.closest("li").getAttribute("id");
  tasks = tasks.filter(task => task.id !== +taskId);
  saveToLocal();
  renderTasks();
}
function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTasksFromLocal() {
  const saved = localStorage.getItem("tasks");
  if (!saved) return;
  tasks = JSON.parse(saved);
}
function switchTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("theme-light" ? "theme-dark" : "theme-light");
}

form.addEventListener("submit", e => handleSubmit(e));
list.addEventListener("click", e => deleteTask(e));
themeBtn.addEventListener("click", () => switchTheme());
