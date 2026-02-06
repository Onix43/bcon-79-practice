import { loadLS, store } from "./storage-sevice.js";
import {
  onDeleteBtnClick,
  renderNotes,
  onFormSubmit,
} from "./notes-servise.js";
import { STORE_KEY } from "./variables.js";
import { setTheme, onThemeSwitch } from "./theme-service.js";
import elList from "./html-elements.js";

// Listeners
elList.formEl.addEventListener("submit", onFormSubmit);
elList.listEl.addEventListener("click", onDeleteBtnClick);
elList.themeToggler.addEventListener("click", onThemeSwitch);

// Initial code
function init() {
  // Notes initial render
  const savedNotes = loadLS(STORE_KEY.notes);
  if (!savedNotes) {
    return;
  }
  store.notes = [...savedNotes];
  renderNotes(store.notes);

  // Theme initial render
  const savedTheme = loadLS(STORE_KEY.appTheme);
  if (!savedTheme) {
    return;
  }
  setTheme(savedTheme);
}
init();
