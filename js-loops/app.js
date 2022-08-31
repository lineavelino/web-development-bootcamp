const inputNumber = document.getElementById("user-number");
const calculatorButton = document.querySelector(
  "#calculator button"
);
const outputSum = document.getElementById("calculated-sum");

function sumAllNumbers() {
  let sum = 0;
  for (let i = 0; i <= inputNumber.value; i++) {
    sum += i;
  }
  outputSum.textContent = sum;
  outputSum.style.display = "block";
}

calculatorButton.addEventListener("click", sumAllNumbers);
