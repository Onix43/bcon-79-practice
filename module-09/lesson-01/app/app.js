// App store ❤️
let store = {
  notes: [],
  appTheme: "light",
};

// Generate id instance
const g = new GenerateId();

// Elements
const listEl = document.querySelector(".js-notes-list");
const cardEl = document.querySelector(".js-card");
const formEl = document.querySelector(".js-form");
const deleteBtn = document.querySelector(".js-delete-btn");

// Listeners
formEl.addEventListener("submit", onFormSubmit);

// Functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const notesData = {
    ...Object.fromEntries(new FormData(form)),
    id: g.generate(10),
  };
  store.notes = [...store.notes, notesData];
  form.reset();
}

function renderNotes(notes = []) {
  const markup = notes.map(createNote).join("");
  listEl.insertAdjacentHTML("beforeend", markup);
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
