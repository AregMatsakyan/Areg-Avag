let a = "";
let b = "";
let znak = "";
let finish = false;

const tver = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const nshan = ["X", "/", "+", "-"];

const out = document.querySelector(".calc-screen input");
function clearAll() {
  a = "";
  b = "";
  znak = "";
  finish = false;
  out.value = 0;
}

document.querySelector(".jnjel").onclick = clearAll;
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyC") {
    clearAll();
  } else {
    out.value = event.key;
  }
  const key1 = event.key;
  if (tver.includes(key1)) {
    if (b === "" && znak === "") {
      a += key1;
      out.value = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key1;
      finish = false;
      out.value = b;
    } else {
      b += key1;
      out.value = b;
      return;
    }
  }
  if (nshan.includes(key1)) {
    znak = key1;
    out.value = znak;
    return;
  }
  if (key1 === "=") {
    if (b === "") {
      b = a;
    }
    switch (znak) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.value = "error";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.value = a;
  }
});

document.querySelector(".buttns").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains(".jnjel")) return (out.value = "");
  const key = event.target.textContent;
  debugger;
  if (tver.includes(key)) {
    if (b === "" && znak === "") {
      a += key;
      out.value = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.value = b;
    } else {
      b += key;
      out.value = b;
      return;
    }
  }

  if (nshan.includes(key)) {
    znak = key;
    out.value = znak;
    return;
  }
  if (key === "=") {
    if (b === "") {
      b = a;
    }
    switch (znak) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.value = "error";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.value = a;
  }
};
