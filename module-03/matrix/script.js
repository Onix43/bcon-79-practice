// Task 1
let res = "";

function fn1() {
  for (let i = 1; i <= 3; i++) {
    for (let i = 1; i <= 3; i++) {
      res += "*";
    }
    res += "_";
  }
  return res;
}

document.querySelector(".b-1").onclick = () => {
  document.querySelector(".out-1").textContent = fn1();
};

// Task 2
let res2 = "";

function fn2() {
  for (let i = 1; i <= 3; i++) {
    res2 += `${i}<br />`;
    for (let i = 1; i <= 3; i++) {
      res2 += "*_";
    }
    res2 += "<br />";
  }

  return res2;
}

document.querySelector(".b-2").onclick = () => {
  document.querySelector(".out-2").innerHTML = fn2();
};
// Task 3
let res3 = "";

function fn3() {
  for (let i = 1; i <= 4; i++) {
    for (let i = 1; i <= 3; i++) {
      res3 += "*_";
    }
    res3 += "<br />";
  }

  return res3;
}

document.querySelector(".b-3").onclick = () => {
  document.querySelector(".out-3").innerHTML = fn3();
};
// Task 4
let res4 = "";

function fn4() {
  for (let i = 1; i <= 4; i++) {
    res4 += ` ${i}_ `;
    for (let i = 1; i <= 5; i++) {
      res4 += `${i}*`;
    }
  }

  return res4.trim();
}

document.querySelector(".b-4").onclick = () => {
  document.querySelector(".out-4").innerHTML = fn4();
};

// Task 5
let res5 = "";

function fn5() {
  for (let i = 1; i <= 3; i++) {
    for (let i = 1; i <= 6; i++) {
      res5 += `${i % 2 === 0 ? 0 : 1}`;
    }
    res5 += "<br />";
  }

  return res5;
}

document.querySelector(".b-5").onclick = () => {
  document.querySelector(".out-5").innerHTML = fn5();
};
// Task 6
let res6 = "";

function fn6() {
  for (let i = 1; i <= 3; i++) {
    for (let i = 1; i <= 6; i++) {
      res6 += `${i % 3 === 0 ? "x" : i % 2 === 0 ? 0 : 1}`;
    }
    res6 += "<br />";
  }

  return res6;
}

document.querySelector(".b-6").onclick = () => {
  document.querySelector(".out-6").innerHTML = fn6();
};
// Task 7
let res7 = "";

function fn7() {
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      res7 += `*`;
    }
    res7 += "<br />";
  }

  return res7;
}

document.querySelector(".b-7").onclick = () => {
  document.querySelector(".out-7").innerHTML = fn7();
};
// Task 8
let res8 = "";

function fn8() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      res8 += `*`;
    }
    res8 += "<br />";
  }

  return res8;
}

document.querySelector(".b-8").onclick = () => {
  document.querySelector(".out-8").innerHTML = fn8();
};
// Task 9
let res9 = "";

function fn9() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      res9 += `${j}_`;
    }
    res9 += "<br />";
  }

  return res9;
}

document.querySelector(".b-9").onclick = () => {
  document.querySelector(".out-9").innerHTML = fn9();
};
// Task 10
let res10 = "";
let multiplier = 0;

function fn10() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      res10 += `${j + multiplier}_`.padStart(3, 0);
    }
    res10 += "<br />";
    multiplier += 10;
  }

  return res10;
}

document.querySelector(".b-10").onclick = () => {
  document.querySelector(".out-10").innerHTML = fn10();
};
