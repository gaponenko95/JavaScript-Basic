"use strict";

function performCalculation(operator) {
  const a = Number(document.querySelectorAll(".input")[0].value);
  const b = Number(document.querySelectorAll(".input")[1].value);
  const resultPanel = document.querySelector(".panel");

  if (!a || !b || isNaN(a) || isNaN(b)) {
    resultPanel.innerText = "Используйте числа";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }

  resultPanel.innerText = result;
}
