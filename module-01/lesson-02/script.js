// task 1
const a = 7;
const b = 9;
console.log(a * b);

// task 2
const c = 7;
const d = 9;
const res = c * d;
document.querySelector(".out-2").textContent = res;

// task 3
const e = 3;
const f = 5;
document.querySelector(".out-3").textContent = e + f;

// task 4
const e1 = "3";
const f1 = 5;
document.querySelector(".out-4").textContent = e1 + f1;

// task 5
const e2 = 3;
const f2 = 0;
document.querySelector(".out-5").textContent = e2 / f2;

// task 6
const e3 = 3;
const f3 = "Hello";
document.querySelector(".out-6").textContent = e3 + f3;

// task 7
const e4 = 3;
const f4 = "Hello";
document.querySelector(".out-7").textContent = e4 * f4;

// task 8
const input = document.querySelector(".i-8");
document.querySelector(".b-8").addEventListener("click", () => {
  document.querySelector(".out-8").textContent = input.value;
});

// task 9
const input1 = document.querySelector(".i-9");
document.querySelector(".b-9").addEventListener("click", () => {
  document.querySelector(".out-9").textContent = input1.value;
  input1.value = "";
});

// task 10
const input2 = document.querySelector(".i-10");
document.querySelector(".b-10").addEventListener("click", () => {
  document.querySelector(".out-10").textContent = input2.value * 20;
});

// task 11
const input3 = document.querySelector(".i-11");
const div = document.querySelector(".out-11");
function t11(value) {
  value = input3.value;
  div.textContent = value + 55;
}
document.querySelector(".b-11").addEventListener("click", t11());

// task 12
const input4 = document.querySelector(".i-12-1");
const input5 = document.querySelector(".i-12-2");
function t12() {
  document.querySelector(
    ".out-12"
  ).textContent = `Hello ${input4.value} ${input5.value}`;
}
document.querySelector(".b-12").addEventListener("click", () => t12());

// task 13
const input6 = document.querySelector(".i-13-1");
const input7 = document.querySelector(".i-13-2");
function t13(a, b) {
  document.querySelector(".out-13").textContent = Number(a) + Number(b);
}
document
  .querySelector(".b-13")
  .addEventListener("click", () => t13(input6.value, input7.value));

// task 14
const input8 = document.querySelector(".i-14");
function t14() {
  input8.value = "Go";
}
// document.querySelector(".b-14").addEventListener("click", () => t14());
const btn = document.querySelector(".b-14");
btn.onclick = t14;

// task 15
const btn2 = document.querySelector(".b-15");
function t15() {
  document.querySelector(".i-15").style.border = "4px solid red";
}
btn2.onclick = t15;

// task 16
const btn3 = document.querySelector(".b-16");
function t16(a, b) {
  document.querySelector(".out-16").textContent = a + b;
}
btn3.onclick = () =>
  t16(
    document.querySelector(".i-16-1").value,
    document.querySelector(".i-16-2").value
  );

// task 17
const btn4 = document.querySelector(".b-17");
function t17(a) {
  document.querySelector(".out-17-1").textContent = Number(a);
  document.querySelector(".out-17-2").textContent = Number(a);
  document.querySelector(".out-17-3").textContent = Number(a);
}
btn4.onclick = () => t17(document.querySelector(".i-17").value);

// task 18
const btn5 = document.querySelector(".b-18");
function t18(a) {
  document.querySelector(".out-18").textContent = parseFloat(a);
}
btn5.onclick = () => t18(document.querySelector(".i-18").value);

// task 19
const btn6 = document.querySelector(".b-19");
function t19() {
  const a = document.querySelector(".i-19-1").value;
  const b = document.querySelector(".i-19-2").value;

  document.querySelector(".out-19").textContent = Number(a) + Number(b);
}
btn6.onclick = t19;

// task 20
const btn7 = document.querySelector(".b-20");
let click = 0;
function t20() {
  click++;
  document.querySelector(".out-20").textContent = `Clicked ${click} times`;
}
btn7.onclick = t20;
