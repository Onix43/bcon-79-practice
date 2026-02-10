import elList from "./html-elements.js";
import { init } from "./initial-function.js";
import { onDeleteBtnClick, onFormSubmit } from "./notes-servise.js";
import { onThemeSwitch } from "./theme-service.js";

// Listeners
elList.formEl.addEventListener("submit", onFormSubmit);
elList.listEl.addEventListener("click", onDeleteBtnClick);
elList.themeToggler.addEventListener("click", onThemeSwitch);

// Initial code
init();
