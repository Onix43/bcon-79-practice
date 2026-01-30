// Task 01
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

function fn1() {
  out1.textContent = 1;
}

btn1.onclick = fn1;

// Task 02
const out2 = document.querySelector(".out-2");
const i2 = document.querySelector(".i-2");

function fn2() {
  out2.textContent = 2;
}

i2.onclick = fn2;
// Task 03
const out3 = document.querySelector(".out-3");
const p3 = document.querySelector(".p-3");

function fn3() {
  out3.textContent = 3;
}

p3.onclick = fn3;
// Task 04
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
const i4 = document.querySelector(".i-4");

function fn4() {
  out4.textContent = i4.checked;
}

btn4.onclick = fn4;
// Task 05
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
const i5 = document.querySelector(".i-5");

function fn5() {
  out5.textContent = i5.checked ? i5.value : false;
}

btn5.onclick = fn5;
// Task 06
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const i6 = document.querySelector(".i-6");

function fn6() {
  out6.textContent = i6.value;
}

btn6.onclick = fn6;
// Task 07
const btn7 = document.querySelector(".b-7");
const out71 = document.querySelector(".out-71");
const out72 = document.querySelector(".out-72");
const i7 = document.querySelector(".i-7");

function fn7() {
  out71.textContent = i7.value;
  out72.textContent = i7.value.length >= 6 ? 1 : 0;
}

btn7.onclick = fn7;
// Task 08
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const i8 = document.querySelector(".i-8");

function fn8() {
  out8.innerHTML = `<div class='js2'>new div</div>`;
}

btn8.onclick = fn8;
// Task 09
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const r9 = document.querySelector(".r-9");

function fn9() {
  out9.textContent = r9.checked ? r9.value : false;
}

btn9.onclick = fn9;
// Task 10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const i10 = document.querySelector(".i-10");

function fn10() {
  out10.style.backgroundColor = i10.value;
}

btn10.onclick = fn10;
// Task 11
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const i111 = document.querySelector(".i-111");
const i112 = document.querySelector(".i-112");

function fn11() {
  i112.value = i111.value;
}

btn11.onclick = fn11;
// Task 12
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
const i12 = document.querySelector(".i-12");

function fn12() {
  out12.textContent = i12.value;
}

btn12.onclick = fn12;
// Task 13
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");
const i13 = document.querySelector(".i-13");

function fn13() {
  out13.textContent = i13.value;
}

i13.onchange = fn13;
// Task 14
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");
const t14 = document.querySelector(".t-14");

function fn14() {
  out14.textContent = t14.textContent;
}

btn14.onclick = fn14;
// Task 15
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");
const t15 = document.querySelector(".t-15");
const i15 = document.querySelector(".i-15");

function fn15() {
  t15.textContent = i15.value;
  out15.textContent = i15.value;
}

btn15.onclick = fn15;
// Task 16
const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");
const s16 = document.querySelector(".s-16");

function fn16() {
  out16.textContent = s16.value;
}

btn16.onclick = fn16;
// Task 17
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");
const s17 = document.querySelector(".s-17");

function fn17() {
  out17.textContent = s17.value;
}

s17.onchange = fn17;
// Task 18
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");
const s18 = document.querySelector(".s-18");
const i18 = document.querySelector(".i-18");

function fn18() {
  i18.value = s18.value;
}

s18.onchange = fn18;
// Task 19
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");
const i19 = document.querySelector(".i-19");

function fn19() {
  i19.value = out19.textContent;
}

btn19.onclick = fn19;
// Task 20
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
const s201 = document.querySelector(".s-201");
const s202 = document.querySelector(".s-202");

function fn20() {
  s202.value = s201.value;
}

s201.onchange = fn20;
