// Task-1
const ar1 = ["str", 4, true];
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");

btn1.onclick = () => {
  out1.textContent = ar1;
};
// ! Task-2
const ar2 = ["str", 4, true];
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");

// Task-3
const ar3 = [1, 4, true, "hi"];
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = () => {
  out3.textContent = ar3.length;
};
// Task-4
const ar4 = [1, 4, true, "hi"];
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
let res = "";

btn4.onclick = () => {
  res += `${ar4[0]} `;
  res += `${ar4[3]} `;
  res += `${ar4[4]} `;
  out4.textContent = res;
};
// Task-5
const ar5 = [1, 4, 3, 4, 5];
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");
let res5 = 0;

btn5.onclick = () => {
  res5 = ar5[0] + ar5[2] + ar5[3];
  out5.textContent = res5;
};
// Task-6
const ar6 = ["Михаїл", "Скорпіон", "21", "11"];
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = () => {
  out6.textContent = ar6.join(" ");
};
// Task-7
const ar7 = [];
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

function f7() {
  ar7[7] = "Vietnam";
  ar7[6] = "Turkey";
  ar7[5] = "Italy";
  out7.textContent = ar7.join(" ");
}
btn7.onclick = f7;

// ? Task-8
const ar8 = [];
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const out81 = document.querySelector(".out-8-1");

function f8() {
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  out8.textContent = ar8.join("-");
  out81.textContent = ar8.length;
}
btn8.onclick = f8;
// Task-9
const ar9 = [1, 4, 5, 6, 7, 8, 89];
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

function f9() {
  out9.textContent = ar9[ar9.length - 1];
}
btn9.onclick = f9;
// Task-10
const ar10 = [100, 200, 300, 400, 700, 121];
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

function f10() {
  out10.textContent = ar10[1] + ar10[ar10.length - 1];
}
btn10.onclick = f10;
// Task-11
const ar11 = [2, 3, 4, 5, 6, 7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

function f11() {
  let temp = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = temp;

  out11.textContent = ar11.join(" ");
}
btn11.onclick = f11;
// Task-12
const ar12 = ["test", "west", "list", "class", "best"];
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

function f12() {
  let temp = ar12[0];
  ar12[0] = ar12[ar12.length - 1];
  ar12[ar12.length - 1] = temp;
  out12.textContent = ar12.join(" ");
}
btn12.onclick = f12;
// Task-13
const ar13 = ["test", "west", "list", "class", "best"];
const btn13 = document.querySelector(".b13-");
const out13 = document.querySelector(".out-13");

function f13() {
  let res = "";
  for (let i = 0; i < ar13.length; i++) {
    res += `${i} ${ar13[i]} `;
  }
  out13.textContent = res;
}
btn13.onclick = f13;
// Task-14
const ar14 = [1, 2, 3, "hello", 66];
const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

function f14() {
  out14.textContent = ar14.reverse().join(" ");
}
btn14.onclick = f14;
// Task-15
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");
let newAr15 = [];

function f15() {
  const newAr15 = ar15.filter(n => n > 0);
  out15.textContent = newAr15.join(" ");
}

// function f15() {
//   for (let i = 0; i < ar15.length; i++) {
//     if (ar15[i] > 0) {
//       newAr15.push(ar15[i]);
//     }
//   }
//   out15.textContent = newAr15.join(" ");
// }
btn15.onclick = f15;
// Task-16
const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
const btn16 = document.querySelector(".b-16");
const out16Odd = document.querySelector(".out-16-odd");
const out16Even = document.querySelector(".out-16-even");

function f16() {
  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      ar16_even.push(ar16[i]);
    } else ar16_odd.push(ar16[i]);
  }
  out16Even.textContent = ar16_even.join(" ");
  out16Odd.textContent = ar16_odd.join(" ");
}
btn16.onclick = f16;
// Task-17
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");
let newArr17 = [];

function f17() {
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      newArr17.push(ar17[i]);
    }
  }
  out17.textContent = newArr17.length;
}
btn17.onclick = f17;
// Task-18
const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

function f18() {
  let max = ar18[0];
  for (let i = 1; i < ar18.length; i++) {
    ar18[i] > max ? (max = ar18[i]) : null;
  }
  out18.textContent = max;
}
btn18.onclick = f18;
// Task-19
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");

function f19() {
  let min = ar19[0];
  let indexOfMin = 0;
  for (let i = 1; i < ar19.length; i++) {
    if (ar19[i] < min) {
      min = ar19[i];
      indexOfMin = i;
    }
  }
  out19.textContent = indexOfMin;
}
btn19.onclick = f19;
// Task-20
const ar20 = [4, 5, 6, 7, 8, 9, 10];
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

function f20() {
  //   out20.textContent = ar20.reduce((acc, value) => acc + value, 0);

  let sum = 0;
  for (const num of ar20) {
    sum += num;
  }
  out20.textContent = sum;
}
btn20.onclick = f20;
