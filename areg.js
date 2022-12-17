let number1 = "";
let number2 = "";
let sign = "";
let finish = false;

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const signs = ["X", "/", "+", "-"];
const calcKeyboard = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "X",
  "/",
  "+",
  "-",
  "=",
  "с",
  "С",
  "c",
  "C",
];

const out = document.querySelector(".calc-screen input");
function clearAll() {
  number1 = "";
  number2 = "";
  sign = "";
  finish = false;
  out.value = 0;
}
document.querySelector(".delete").onclick = clearAll;
document.querySelector(".buttns").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains(".delete")) return (out.value = "");
  const key = event.target.textContent;
  debugger;
  if (numbers.includes(key)) {
    if (number2 === "" && sign === "") {
      number1 += key;
      out.value = number1;
    } else if (number1 !== "" && number2 !== "" && finish) {
      number2 = key;
      finish = false;
      out.value = number2;
    } else {
      number2 += key;
      out.value = number2;
      return;
    }
  }

  if (signs.includes(key)) {
    sign = key;
    out.value = sign;
    return;
  }
  if (key === "=") {
    if (number2 === "") {
      number2 = number1;
    }
    switch (sign) {
      case "+":
        number1 = +number1 + +number2;
        break;
      case "-":
        number1 = number1 - number2;
        break;
      case "X":
        number1 = number1 * number2;
        break;
      case "/":
        if (number2 === "0") {
          out.value = "error";
          return;
        }
        number1 = number1 / number2;
        break;
    }
    finish = true;
    out.value = number1;
  }
};
document.addEventListener("keydown", function (event) {
  if (!calcKeyboard.includes(event.key)) return;
  if (event.code == "KeyC") {
    clearAll();
  } else {
    out.value = event.key;
  }
  const key1 = event.key;
  if (numbers.includes(key1)) {
    if (number2 === "" && sign === "") {
      number1 += key1;
      out.value = number1;
    } else if (number1 !== "" && number2 !== "" && finish) {
      number2 = key1;
      finish = false;
      out.value = number2;
    } else {
      number2 += key1;
      out.value = number2;
      return;
    }
  }

  if (signs.includes(key1)) {
    sign = key1;
    out.value = sign;
    return;
  }
  if (key1 === "=") {
    if (number2 === "") {
      number2 = number1;
    }
    switch (sign) {
      case "+":
        number1 = +number1 + +number2;
        break;
      case "-":
        number1 = number1 - number2;
        break;
      case "X":
        number1 = number1 * number2;
        break;
      case "/":
        if (number2 === "0") {
          out.value = "error";
          return;
        }
        number1 = number1 / number2;
        break;
    }
    finish = true;
    out.value = number1;
  }
});
