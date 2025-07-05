function init() {
  let num1 = "";
  let num2 = "";
  let operator = "";
  let result;

  const numElem = document.querySelectorAll(".button.number");
  const operatorElem = document.querySelectorAll(".button.operator");
  const displayElem = document.querySelector(".display");
  const equalsElem = document.querySelector(".button.equals");

  numElem.forEach((element) => {
    element.addEventListener("click", function () {
      if (operator === "") {
        num1 += element.textContent;
        displayElem.textContent = num1;
      } else {
        num2 += element.textContent;
        displayElem.textContent = num2;
      }
    });
  });

  operatorElem.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.textContent === "C") {
        num1 = "";
        num2 = "";
        operator = "";
      } else {
        operator = element.textContent;
      }
      displayElem.textContent = operator;
    });
  });

  equalsElem.addEventListener("click", function () {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === "/") {
      result = num1 / num2;
      displayElem.textContent = result;
    } else if (operator === "*") {
      result = num1 * num2;
      displayElem.textContent = result;
    } else if (operator === "-") {
      result = num1 - num2;
      displayElem.textContent = result;
    } else {
      result = num1 + num2;
      displayElem.textContent = result;
    }
    num1 = "";
    num2 = "";
    operator = "";
  });
}

document.addEventListener("DOMContentLoaded", init);
