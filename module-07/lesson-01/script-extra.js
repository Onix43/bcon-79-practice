// Task 1
// const input = document.getElementById("input");
// const button = document.querySelector("button");

// button.onclick = () => (input.value = "HelloHere");
// Task 2

// button.onclick = () => alert(input.value);
// Task 3
// const input1 = document.getElementById("first-input");
// const input2 = document.getElementById("second-input");

// button.onclick = () => {
//   let temp = input1.value;
//   input1.value = input2.value;
//   input2.value = temp;
// };
// Task 4
// const p = document.querySelectorAll("p");
// let count = 1;

// button.onclick = () => {
//   p.forEach(el => {
//     el.textContent = count;
//     count++;
//   });
// };

// Task 5
// const input1 = document.getElementById("test");
// const input2 = document.getElementById("result");

// button.onclick = () => {
//   const number = +input1.value;
//   if (typeof input1.value !== "number") alert("This is not a number!");
//   input2.value = number ** 2;
// };
// Task 6

// Task 7
// const ul = document.querySelector("ul");
// while (true) {
//   const userRes = prompt();
//   if (userRes === null) break;

//   const li = document.createElement("li");
//   li.textContent = userRes;
//   ul.append(li);
// }

// Task 8
// const links = document.querySelectorAll("a");
// links.forEach(link => {
//   link.addEventListener("mouseover", () => {
//     link.setAttribute("title", link.textContent);
//     console.log(link.getAttribute("title"));
//   });
// });

// Task 9
// const spans = document.querySelectorAll("span");

// function colorBackgroundToRed() {
//   this.style.backgroundColor = "red";
//   this.removeEventListener("click", colorBackgroundToRed);
//   this.addEventListener("click", colorBackgroundToGreen);
// }
// function colorBackgroundToGreen() {
//   this.style.backgroundColor = "green";
//   this.removeEventListener("click", colorBackgroundToGreen);
//   this.addEventListener("click", colorBackgroundToRed);
// }
// spans.forEach(span => {
//   span.addEventListener("click", colorBackgroundToRed);
// });

// Task 10
// const ol = document.getElementById("ol");
// const button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "пункт";
//   ol.append(li);
// });
// ol.addEventListener("click", event => {
//   const target = event.target.closest("li");
//   target.textContent += "!";
// });
// Task 11
// const unlockBtn = document.querySelector(".unlock");
// const lockBtn = document.querySelector(".lock");
// const input = document.getElementById("input");

// lockBtn.onclick = () => {
//   input.setAttribute("disabled", true);
// };
// unlockBtn.onclick = () => {
//   input.removeAttribute("disabled");
// };
// Task 12
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const resultEl = document.getElementById("result");
// const btn = document.getElementById("btn");

// btn.onclick = () => {
//   resultEl.innerHTML = +input1.value + +input2.value;
// };

// Task 13
// const inputs = document.querySelectorAll("input");
// const p = document.getElementById("test");

// inputs.forEach(input => {
//   input.addEventListener("blur", () => {
//     p.textContent = input.value;
//   });
// });
// Task 14
const input = document.querySelector("input");
const span = document.getElementById("show");

input.addEventListener("keydown", event => {
  span.textContent = event.code;
});
