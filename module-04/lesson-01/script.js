// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};
function fn1() {
  document.querySelector(".out-1").textContent = obj1.two;
}
document.querySelector(".b-1").onclick = fn1;

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
function fn2() {
  document.querySelector(".out-2").textContent = obj2.five;
}
document.querySelector(".b-2").onclick = fn2;

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
function fn3() {
  document.querySelector(".out-3").textContent = Object.values(obj3)
    .filter(n => n === "hi")
    .splice(",")
    .join(" ");
}
document.querySelector(".b-3").onclick = fn3;

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
function fn4() {
  for (const item in obj4) {
    document.querySelector(".out-4").innerHTML +=
      `${item} ${obj4[item]} <br />`;
  }
}
document.querySelector(".b-4").onclick = fn4;

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};
const out5 = document.querySelector(".out-5");
function fn5(array, block) {
  for (const item in array) {
    block.innerHTML += `${item} ${array[item]} <br />`;
  }
}
document.querySelector(".b-5").onclick = () => fn5(obj5, out5);

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};
const i61 = document.querySelector(".i-61");
const i62 = document.querySelector(".i-62");
const out6 = document.querySelector(".out-6");

function fn6(key, value) {
  obj6[key] = value;
  fn5(obj6, out6);
}

document.querySelector(".b-6").onclick = () => fn6(i61.value, i62.value);
// Task 7
const obj7 = {
  b: 17,
  e: 22,
};
const i7 = document.querySelector(".i-7");
const out7 = document.querySelector(".out-7");

function fn7(key) {
  if (obj7[key]) {
    out7.textContent = 1;
  } else out7.textContent = 0;
}

document.querySelector(".b-7").onclick = () => fn7(i7.value);
// Task 8
const obj8 = {
  b: 17,
  e: 22,
};
const i8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");

function fn8(key) {
  if (obj8[key]) {
    out8.textContent = key;
  } else out8.textContent = 0;
}

document.querySelector(".b-8").onclick = () => fn8(i8.value);
// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
const i9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");

function fn9(value) {
  let result = "";
  for (const key in obj9) {
    if (obj9[key] === Number(value)) {
      result += `${key} `;
    }
  }
  out9.textContent = result;
}

document.querySelector(".b-9").onclick = () => fn9(i9.value);
// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};
const out10 = document.querySelector(".out-10");

function fn10(obj, selector) {
  for (const key in obj) {
    if (obj[key] === selector) {
      out10.textContent = true;
      return true;
    }
  }
  out10.textContent = false;
  return false;
}

document.querySelector(".b-10").onclick = () => fn10(obj10, 22);
// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
const i11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");

function fn11(key) {
  // const result = Object.fromEntries(
  //   Object.entries(obj11).filter(k => !k.includes(key))
  // );
  delete obj11[key];
  console.log(obj11);
  fn5(obj11, out11);
}

document.querySelector(".b-11").onclick = () => fn11(i11.value);
// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};
const i12 = document.querySelector(".i-12");
const out12 = document.querySelector(".out-12");

function fn12(selector) {
  for (const key in obj12) {
    if (obj12[key] === +selector) {
      delete obj12[key];
    }
  }
  fn5(obj12, out12);
}

document.querySelector(".b-12").onclick = () => fn12(i12.value);
// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};
const out13 = document.querySelector(".out-13");

function fn13() {
  let result = 0;
  for (const key in obj13) {
    typeof obj13[key] === "number" ? (result += obj13[key]) : null;
  }
  out13.textContent = result;
}

document.querySelector(".b-13").onclick = fn13;
// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};
const out14 = document.querySelector(".out-14");

function fn14() {
  let result = "";
  for (const key in obj14) {
    result += `${obj14[key][0]} `;
  }

  out14.textContent = result;
}

document.querySelector(".b-14").onclick = fn14;
// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const out15 = document.querySelector(".out-15");

function fn15() {
  let result = "";
  for (const key in obj15) {
    result += `${obj15[key]} `.split(",").join(" ");
  }

  out15.textContent = result;
}

document.querySelector(".b-15").onclick = fn15;
// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const out16 = document.querySelector(".out-16");

function fn16() {
  let result = "";
  for (const key in obj16) {
    result += `${obj16[key].name} `;
  }

  out16.textContent = result;
}

document.querySelector(".b-16").onclick = fn16;
// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};
const out17 = document.querySelector(".out-17");

function fn17() {
  let result = "";
  for (const key in obj17) {
    if (obj17[key].age > 30) {
      result += `${obj17[key].name} `;
    }
  }

  out17.textContent = result;
}

document.querySelector(".b-17").onclick = fn17;
// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
const i18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");

function fn18() {
  for (const key in obj18) {
    if (obj18[key].includes(i18.value)) {
      out18.textContent = obj18[key].splice(",").join(" ");
    }
  }
}

document.querySelector(".b-18").onclick = fn18;
// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
const i19 = document.querySelector(".i-19");
const out19 = document.querySelector(".out-19");

function fn19() {
  for (const key in obj19) {
    const lowered = obj19[key].map(n => n.toLowerCase());
    if (lowered.includes(i19.value.toLowerCase())) {
      out19.textContent = key;
    }
  }
}

document.querySelector(".b-19").onclick = fn19;
// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
const out20 = document.querySelector(".out-20");

function fn20() {
  let result = [];
  for (const key in obj20) {
    const preRes = obj20[key].filter(n => n[1] === 2);

    result.push(...preRes);
  }
  out20.textContent = result.map(s => s[0]).join(" ");
}

document.querySelector(".b-20").onclick = fn20;
