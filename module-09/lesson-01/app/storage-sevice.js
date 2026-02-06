export const store = {
  notes: [],
  appTheme: "light",
};

export function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (err) {
    console.log(err.message);
  }
}
export function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    return JSON.parse(serialisedState);
  } catch (err) {
    console.log(err.message);
  }
}
