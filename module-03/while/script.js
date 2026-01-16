// Task 1
function fn1() {
  let count = 1;
  let res = "";
  while (count <= 50) {
    res += `${count}_`;
    count++;
  }
  return res;
}

document.querySelector(".b-1").onclick = () => {
  document.querySelector(".out-1").textContent = fn1();
};
// Task 2
function fn2() {
  let count = 2;
  let res = "";
  while (count <= 46) {
    res += `${count}_`;
    count += 2;
  }
  return res;
}

document.querySelector(".b-2").onclick = () => {
  document.querySelector(".out-2").textContent = fn2();
};
// Task 3
function fn3() {
  let count = 25;
  let res = "";
  while (count >= 7) {
    res += `${count}_`;
    count--;
  }
  return res;
}

document.querySelector(".b-3").onclick = () => {
  document.querySelector(".out-3").textContent = fn3();
};
// Task 4
function fn4() {
  let count = 77;
  let res = "";
  while (count >= 35) {
    res += `${count}_`;
    count -= 3;
  }
  return res;
}

document.querySelector(".b-4").onclick = () => {
  document.querySelector(".out-4").textContent = fn4();
};
// Task 5
function fn5() {
  let count = 1;
  let res = "";
  while (count <= 17) {
    res += `${count}_${count % 2 === 0 ? "**" : "*"}`;
    count++;
  }
  return res;
}

document.querySelector(".b-5").onclick = () => {
  document.querySelector(".out-5").textContent = fn5();
};
// Task 6
function fn6() {
  let count = 1;
  let count2 = 1; // тут мав би бути інпут 1 і підв'язана до нього змінна
  let res = "";
  while (count2 <= 3) {
    while (count <= 6) {
      res += `*`;
      count++;
    }
    res += "<br />";
    count = 1;
    count2++;
  }
  return res;
}

document.querySelector(".b-6").onclick = () => {
  document.querySelector(".out-6").innerHTML = fn6();
};
// Task 7
function fn7() {
  const input = document.querySelector(".i-7");

  let count = +input.value;
  let res = "";
  while (count >= 0) {
    res += `${count}_`;
    count--;
  }
  return res;
}

document.querySelector(".b-7").onclick = () => {
  document.querySelector(".out-7").textContent = fn7();
};
// Task 8
function fn8() {
  const input81 = document.querySelector(".i-81");
  const input82 = document.querySelector(".i-82");

  let res = "";
  while (+input81.value <= +input82.value) {
    res += `${+input81.value}_`;
    input81.value++;
  }
  return res;
}
// Можна було вивести input81.value у змінну count щоб не було його зміни але...

document.querySelector(".b-8").onclick = () => {
  document.querySelector(".out-8").textContent = fn8();
};
// Task 9
function fn9() {
  const input91 = document.querySelector(".i-91");
  const input92 = document.querySelector(".i-92");
  let min = Math.min(+input91.value, +input92.value);
  let max = Math.max(+input91.value, +input92.value);

  let res = "";
  while (min <= max) {
    res += `${min}_`;
    min++;
  }
  return res;
}

document.querySelector(".b-9").onclick = () => {
  document.querySelector(".out-9").textContent = fn9();
};
// Task 10
function fn10() {
  let res = "";
  let initial = 1950;
  while (initial <= 1966) {
    res += `${initial}_`;
    initial += 2;
  }
  return res;
}

document.querySelector(".b-10").onclick = () => {
  document.querySelector(".out-10").textContent = fn10();
};
// Task 11
function fn11() {
  const divs = document.querySelectorAll(".div-11");
  let count = 0;
  let res = "";
  while (count <= divs.length - 1) {
    res += `${divs[count].textContent}_`;
    count++;
  }
  return res;
}

document.querySelector(".b-11").onclick = () => {
  document.querySelector(".out-11").textContent = fn11();
};
// Task 12
function fn12() {
  const divs = document.querySelectorAll(".div-12");
  let count = 0;
  while (count <= divs.length - 1) {
    divs[count].style.backgroundColor = "orange";
    count++;
  }
}

document.querySelector(".b-12").onclick = () => {
  document.querySelector(".out-12").textContent = fn12();
};
// Task 13
function fn13() {
  const inputs = document.querySelectorAll(".i-13");
  let count = 0;

  while (count <= inputs.length - 1) {
    inputs[count].value = count + 1;
    count++;
  }
}

document.querySelector(".b-13").onclick = () => {
  document.querySelector(".out-13").textContent = fn13();
};
// Task 14
function fn14() {
  const inputs = document.querySelectorAll(".i-14");
  let count = 0;
  let res = "";

  while (count <= inputs.length - 1) {
    if (inputs[count].checked) {
      res += inputs[count].value;
    }
    count++;
  }
  return res;
}

document.querySelector(".b-14").onclick = () => {
  document.querySelector(".out-14").textContent = fn14();
};
// Task 15
function fn15() {
  let count = 77;
  let secCount = 1;
  let res = "";
  while (secCount <= 3) {
    while (count <= 99) {
      res += `${count}_`;
      count += 11;
    }
    secCount++;
    count = 77;
  }
  return res;
}

document.querySelector(".b-15").onclick = () => {
  document.querySelector(".out-15").textContent = fn15();
};
