// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

function savePassword(password) {
  const innerFunction = str => {
    if (str === password) return true;
    else return false;
  };
  return innerFunction;
}
