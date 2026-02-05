// App store ❤️
let store = {
  notes: [],
  appTheme: "light",
};

// Generate id instance
const g = new GenerateId();
const STORE_KEY = { notes: "notes", appTheme: "theme" };

// Elements
const listEl = document.querySelector(".js-notes-list");
const cardEl = document.querySelector(".js-card");
const formEl = document.querySelector(".js-form");
const deleteBtn = document.querySelector(".js-delete-btn");

// Listeners
formEl.addEventListener("submit", onFormSubmit);
listEl.addEventListener("click", onDeleteBtnClick);

// Initial code
function init() {
  const savedNotes = loadLS(STORE_KEY.notes);
  if (!savedNotes) {
    return;
  }
  store.notes = [...savedNotes];
  renderNotes(store.notes);
}
init();

// Functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const notesData = {
    ...Object.fromEntries(new FormData(form)),
    id: g.generate(10),
  };

  if (notesData.name === "" || notesData.body === "") {
    console.log("Empty field!!");
    return;
  }

  store.notes = [...store.notes, notesData];
  renderNotes(store.notes);
  saveLS(STORE_KEY.notes, store.notes);
  form.reset();
}

function renderNotes(notes = []) {
  const markup = notes.map(createNote).join("");
  listEl.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `
     <li class="card js-card">
       <h5 class="card-header">${name}</h5>
         <div class="card-body">
              <p class="card-text">
                ${body}
              </p>
               <button
                class="btn btn-primary js-delete-btn"
                type="button"
                data-noteid="${id}"
               >
                Delete
              </button>
            </div>
          </li>
    `;
}
function onDeleteBtnClick(event) {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  const noteId = event.target.dataset.noteid;
  const filtredNotes = store.notes.filter(note => note.id !== noteId);

  store.notes = [...filtredNotes];

  saveLS(STORE_KEY.notes, store.notes);
  renderNotes(store.notes);
}

// LOCAL STORAGE FUNCTIONS
function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (err) {
    console.log(err.message);
  }
}
function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    return JSON.parse(serialisedState);
  } catch (err) {
    console.log(err.message);
  }
}
