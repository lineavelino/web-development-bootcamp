const inputNumber = document.getElementById("user-number");
const calculatorButton = document.querySelector(
  "#calculator button"
);
const outputSum = document.getElementById("calculated-sum");

const highlightButton = document.querySelector(
  "#highlight-links button"
);
const links = document.querySelectorAll(
  "#highlight-links a"
);

function sumAllNumbers() {
  let sum = 0;
  for (let i = 0; i <= inputNumber.value; i++) {
    sum += i;
  }
  outputSum.textContent = sum;
  outputSum.style.display = "block";
}

function highlightLinks() {
  for (const link of links) {
    link.classList.add("highlight");
  }
}

calculatorButton.addEventListener("click", sumAllNumbers);
highlightButton.addEventListener("click", highlightLinks);
