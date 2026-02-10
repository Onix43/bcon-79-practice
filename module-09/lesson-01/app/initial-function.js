import { renderNotes } from "./notes-servise.js";
import { loadLS, store } from "./storage-sevice.js";
import { setTheme } from "./theme-service.js";
import { STORE_KEY } from "./variables.js";

export function init() {
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
