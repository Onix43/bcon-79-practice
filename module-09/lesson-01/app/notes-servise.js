import elList from "./html-elements.js";
import { store } from "./storage-sevice.js";
import { saveLS } from "./storage-sevice.js";
import { STORE_KEY, g } from "./variables.js";

export function onFormSubmit(event) {
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

export function renderNotes(notes = []) {
  const markup = notes.map(createNote).join("");
  elList.listEl.innerHTML = markup;
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

export function onDeleteBtnClick(event) {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  const noteId = event.target.dataset.noteid;
  const filtredNotes = store.notes.filter(note => note.id !== noteId);

  store.notes = [...filtredNotes];

  saveLS(STORE_KEY.notes, store.notes);
  renderNotes(store.notes);
}
