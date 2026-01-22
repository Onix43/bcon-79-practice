//  Task 1
// Кнопка .b-1 запускає функцію fn1. Функція повинна виводити в .out-1 рядок вигляду:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
let nums = "";
function fn1() {
  for (let i = 1; i <= 16; i++) {
    nums += `${i}_`;
  }
  out1.textContent = nums;
}
btn1.onclick = fn1;

//  Task 2
// Кнопка .b-2 запускає функцію fn2. Функція повинна виводити в .out-2 рядок вигляду:
//     12_14_16_18_20_22_24_26_28_30_32_34_36_38_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
let nums2 = "";
function fn2() {
  for (let i = 12; i <= 38; i += 2) {
    nums2 += `${i}_`;
  }
  out2.textContent = nums2;
}
btn2.onclick = fn2;

//  Task 3
// Кнопка .b-3 запускає функцію fn3. Функція повинна виводити в .out-3 рядок вигляду:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
let nums3 = "";
function fn3() {
  for (let i = 25; i >= 7; i--) {
    nums3 += `${i}_`;
  }
  out3.textContent = nums3;
}
btn3.onclick = fn3;

//  Task 4
// Кнопка .b-4 запускає функцію fn4. Функція повинна виводити в .out-4 рядок вигляду:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// від 77 до 35 з кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу.
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
let nums4 = "";
function fn4() {
  for (let i = 77; i >= 36; i -= 3) {
    nums4 += `${i}_`;
  }
  out4.textContent = nums4;
}
btn4.onclick = fn4;

//  Task 5
// Кнопка .b-5 запускає функцію fn5. Функція повинна виводити в .out-5 рядок вигляду:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// від 1 до 17 з кроком 1. Роздільник - знак підкреслення та зірочка (якщо число непарне, і дві зірочки, якщо парне). Завдання вирішується за допомогою циклу.
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
let nums5 = "";
function fn5() {
  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      nums5 += `${i}_**`;
    } else nums5 += `${i}_*`;
  }
  out5.textContent = nums5;
}
btn5.onclick = fn5;

//  Task 6
// Кнопка .b-6 запускає функцію fn6. Функція повинна виводити в .out-6 рядок вигляду:
//
// ******<br>
// ******<br>
// ******<br>
//
// Завдання вирішується за допомогою циклу. В кожній ітерації цикл виводить 6 зірочок. Перенесення рядка - br. Кількість рядків (ітерацій, повторень) циклу вводить користувач в i-6.
//
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const i6 = document.querySelector(".i-6");
let nums6 = "";
let count6 = 0;
function fn6() {
  do {
    nums6 += "******<br>";
    count6++;
  } while (+i6.value !== count6);
  out6.innerHTML = nums6;
}
btn6.onclick = fn6;

//  Task 7
// Є input .i-7, куди користувач може ввести число більше нуля (перевірок не робимо, приймаємо як факт).
// Після натискання кнопки .b-7 повинна запускатися функція fn7, яка виводить в .out-7 числа від введеного користувачем до нуля включно.
// Роздільник - знак підкреслення. Якщо користувач ввів 4 і натиснув кнопку, ми отримаємо:
// 4_3_2_1_0_
// Завдання вирішується за допомогою циклу.
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
const i7 = document.querySelector(".i-7");
let nums7 = "";
function fn7() {
  nums7 = "";
  for (let i = +i7.value; i >= 0; i--) {
    nums7 += `${i}_`;
  }
  out7.textContent = nums7;
}
btn7.onclick = fn7;

//  Task 8
// Є input .i-81 та .i-82, куди користувач може ввести числа більше нуля (перевірок не робимо, приймаємо як факт).
// Вважаємо, що друге число завжди більше першого.
// Після натискання кнопки .b-8 повинна запускатися функція fn8, яка виводить в .out-8 числа від першого введеного до другого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
//  4_5_6_7_8_
// Завдання вирішується за допомогою циклу.
const i81 = document.querySelector(".i-81");
const i82 = document.querySelector(".i-82");
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
let nums8 = "";
function fn8() {
  nums8 = "";
  for (let i = +i81.value; i <= +i82.value; i++) {
    nums8 += `${i}_`;
  }
  out8.textContent = nums8;
}
btn8.onclick = fn8;
//  Task 9
// Є input .i-91 та .i-92, куди користувач може ввести числа.
// Після натискання кнопки .b-9 повинна запускатися функція fn9, яка виводить в .out-9 числа від меншого введеного до більшого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
// 4_5_6_7_8_
// якщо ввів 8 і 6, то отримаємо
// 6_7_8_
// Завдання вирішується за допомогою циклу. Підказка - спочатку робимо перевірку, а потім запускаємо цикл.
// цикл - один
const i91 = document.querySelector(".i-91");
const i92 = document.querySelector(".i-92");
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
let nums9 = "";
let max;
let min;
function fn9() {
  nums9 = "";
  if (+i91.value > +i92.value) {
    max = +i91.value;
    min = +i92.value;
  } else {
    max = +i92.value;
    min = +i91.value;
  }
  for (let i = min; i <= max; i++) {
    nums9 += `${i}_`;
  }
  out9.textContent = nums9;
}
btn9.onclick = fn9;

//  Task 10
// Кнопка .b-10 запускає функцію fn10. Функція повинна виводити в .out-10 парні роки від 1950 до 1970 включно.
// Роздільник - знак підкреслення. Завдання вирішується через цикл, а парність - через крок (рівний 2).
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
let nums10 = "";
function fn10() {
  for (let i = 1950; i <= 1970; i += 2) {
    nums10 += `${i}_`;
  }
  out10.textContent = nums10;
}
btn10.onclick = fn10;

//  Task 11
// Кнопка .b-11 запускає функцію fn11. Функція повинна:
// - отримати всі div.div-11 у змінну divs11
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: divs[i].innerHTML
// - вивести в .out-11 вміст кожного блоку. Роздільник - знак підкреслення.
// В результаті повинно вийти так:
//     one_3_4_two_
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const divs11 = document.querySelectorAll(".div-11");
let nums11 = "";
function fn11() {
  for (let i = 0; i < divs11.length; i++) {
    nums11 += `${divs11[i].innerHTML}_`;
  }
  out11.textContent = nums11;
}
btn11.onclick = fn11;
//  Task 12
// Кнопка .b-12 запускає функцію fn12. Функція повинна:
// - отримати всі div.div-12
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: elem[i]
// - застосувати до кожного elem[i].style.background = ‘orange’
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
const divs12 = document.querySelectorAll(".div-12");
function fn12() {
  for (let i = 0; i < divs11.length; i++) {
    divs12[i].style.background = "orange";
  }
}
btn12.onclick = fn12;
//  Task 13
// За допомогою циклу привласніть всім input .i-13 value рівне:
// - для першого  1
// - для другого  2
// - для третього 3
const inputs13 = document.querySelectorAll(".i-13");
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13"); // ? перевірка
function fn13() {
  for (let i = 0; i < inputs13.length; i++) {
    inputs13[i].value = i + 1;
  }
  out13.textContent = `${inputs13[0].value},${inputs13[1].value},${inputs13[2].value}`; // ? перевірка
}
btn13.onclick = fn13;
//  Task 14
// Кнопка .b-14 запускає функцію fn14. Функція повинна:
// - отримати всі input.i-14
// - перебрати їх за допомогою циклу. Звернення до елемента виглядає так: elem[i]
// - вивести в .out-14 value вибраного input
// Перевірити, чи вибраний елемент, можна за допомогою elem[i].checked.
const inputs14 = document.querySelectorAll(".i-14");
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");
function fn14() {
  for (let i = 0; i < inputs14.length; i++) {
    if (inputs14[i].checked) {
      out14.textContent = inputs14[i].value;
    }
  }
}
btn14.onclick = fn14;
//  Task 15
// Кнопка .b-15 запускає функцію fn15. Функція повинна виводити наступну послідовність в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Підказка (10 - i) + '_' + i + '_'
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");
let nums15 = "";
function fn15() {
  for (let i = 10; i >= 0; i--) {
    nums15 += `${i}_${10 - i}_`;
  }
  out15.textContent = nums15;
}
btn15.onclick = fn15;
