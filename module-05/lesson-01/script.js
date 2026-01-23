//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");

function fn1() {
  const arr1_res = [];
  arr1.forEach(el => {
    arr1_res.push(el * 2);
  });
  out1.textContent = arr1_res;
}

btn1.onclick = fn1;
// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");

function fn2() {
  const arr2_res = [];
  arr2.forEach(el => {
    arr2_res.push(el / 2);
  });
  out2.textContent = arr2_res;
}

btn2.onclick = fn2;
// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");

function fn3() {
  const arr3_res = [];
  arr3.forEach(el => {
    if (typeof el === "number") arr3_res.push(el);
  });
  out3.textContent = arr3_res;
}

btn3.onclick = fn3;
// Task 4
const arr4_res = [];
const out4 = document.querySelector(".out-4");
const spans4 = document.querySelectorAll(".task-4");

function fn4() {
  const arr4_res = [];
  spans4.forEach(span => {
    const atr = span.getAttribute("data");
    arr4_res.push(atr);
  });

  out4.textContent = arr4_res;
}

fn4();
// Task 5
const arr5_res = [];
const out5 = document.querySelector(".out-5");
const spans5 = document.querySelectorAll(".task-5");

function fn5() {
  const arr5_res = [];
  spans5.forEach(span => {
    span.onclick = () => {
      const atr = span.getAttribute("data");
      arr5_res.push(atr);
      out5.textContent = arr5_res;
    };
  });
}

fn5();
// Task 6 // !
const str6 = "helloworld";
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");

function fn6() {
  const arr6_res = [];

  const res = str6.split("");
  arr6_res.push(res);
  out6.textContent = arr6_res;
}

btn6.onclick = fn6;
// Task 7
const str7 = "hello world hi mazai";
const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");

function fn7() {
  const arr7_res = [];

  const res = str7.split("").filter(char => char !== " ");
  arr7_res.push(res);

  out7.textContent = arr7_res;
}

btn7.onclick = fn7;
// Task 8
const arr8 = [1, 2, 66, 77, 15];
const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");

function fn8() {
  const arr8_res = [];

  const res = arr8.join("-");
  arr8_res.push(res);

  out8.textContent = arr8_res;
}

btn8.onclick = fn8;
// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");

function fn9() {
  const arr9_res = [];

  const res = arr9.flatMap(n => n).join("-");
  arr9_res.push(res);

  out9.textContent = arr9_res;
}

btn9.onclick = fn9;
// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");

function fn10() {
  let arr10_res = "";

  for (const key in arr10) {
    arr10_res += `?${key}=${arr10[key]}&`;
  }
  arr10_res = arr10_res.slice(0, arr10_res.length - 1);

  out10.textContent = arr10_res;
}

btn10.onclick = fn10;
//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");

function fn11() {
  let arr11_res = arr11.map(el => el * 2);

  out11.textContent = arr11_res;
}

btn11.onclick = fn11;
// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");

function fn12() {
  let arr12_res = arr12.map(el => el ** 2);

  out12.textContent = arr12_res;
}

btn12.onclick = fn12;
// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");

function fn13() {
  let arr13_res = arr13.map(el => +el);

  out13.textContent = arr13_res;
}

btn13.onclick = fn13;
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");

function fn14() {
  let arr14_res = arr14.filter(el => typeof el === "number");

  out14.textContent = arr14_res;
}

btn14.onclick = fn14;
// Task 15
const arr15 = [3, 14, 15, 92, "6"];
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");

function fn15() {
  let arr15_res = arr15.filter(el => typeof el === "number" && el % 2 === 0);

  out15.textContent = arr15_res;
}

btn15.onclick = fn15;
// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
const out16 = document.querySelector(".out-16");
const btn16 = document.querySelector(".b-16");

function fn16() {
  let arr16_res = arr16.filter(el => typeof el === "number" && el > 14);

  out16.textContent = arr16_res;
}

btn16.onclick = fn16;
// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");

function fn17() {
  let arr17_res = arr17.map(el => el.toLowerCase());

  out17.textContent = arr17_res;
}

btn17.onclick = fn17;
// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");

function fn18() {
  let arr18_res = arr18
    .map((el, index) => {
      if (el % 2 === 0) return index;
      else return null;
    })
    .filter(el => el !== null);

  out18.textContent = arr18_res;
}

btn18.onclick = fn18;
// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");

function fn19() {
  arr19.forEach((el, index) => (arr19[index] = el.toLowerCase()));
  out19.textContent = arr19;
}

btn19.onclick = fn19;
// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");

function fn20() {
  arr20.forEach((el, index) => (arr20[index] = el < 0 ? 0 : el));
  out20.textContent = arr20;
}

btn20.onclick = fn20;
// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out21 = document.querySelector(".out-21");
const btn21 = document.querySelector(".b-21");

function fn21() {
  const arr21_res = arr21.filter((el, index) => (index % 2 === 0 ? el : null));
  out21.textContent = arr21_res;
}

btn21.onclick = fn21;
// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const out22 = document.querySelector(".out-22");
const btn22 = document.querySelector(".b-22");

function fn22() {
  return Array.isArray(arr22);
}

btn22.onclick = () => {
  out22.textContent = fn22();
};
// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;
const out23 = document.querySelector(".out-23");
const btn23 = document.querySelector(".b-23");

function fn23() {
  return arr23.includes(arr23_num);
}

btn23.onclick = () => {
  out23.textContent = fn23();
};
// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "e";
const out24 = document.querySelector(".out-24");
const btn24 = document.querySelector(".b-24");

function fn24() {
  return arr24.map(el => el.toLowerCase()).includes(arr14_sum.toLowerCase());
}

btn24.onclick = () => {
  out24.textContent = fn24();
};
// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];
const out25 = document.querySelector(".out-25");
const btn25 = document.querySelector(".b-25");

function fn25() {
  const arr25_res = arr25.filter(el => el.pnum.length === 6);
  return arr25_res;
}

btn25.onclick = () => {
  const result = fn25();
  out25.textContent = JSON.stringify(result, null, 2);
};
//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
