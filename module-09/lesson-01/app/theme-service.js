import elList from "./html-elements.js";
import { saveLS, loadLS } from "./storage-sevice.js";
import { STORE_KEY } from "./variables.js";

export function setTheme(theme) {
  elList.htmlEl.dataset.bsTheme = theme;
  elList.themeToggler.value = theme;
}

export function onThemeSwitch(event) {
  const currentTheme = loadLS(STORE_KEY.appTheme) ?? "ligth";

  const switched = currentTheme === "ligth" ? "dark" : "ligth";
  event.target.value = switched;
  elList.htmlEl.dataset.bsTheme = switched;
  saveLS(STORE_KEY.appTheme, switched);
}
