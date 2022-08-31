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

const userData = {
  firstname: "Aline",
  lastname: "Avelino",
  age: 29,
};
const informationButton = document.querySelector(
  "#user-data button"
);
const infosContainer = document.getElementById(
  "output-user-data"
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

function displayUserData() {
  infosContainer.innerHTML = "";

  for (const property in userData) {
    const liItem = document.createElement("li");

    liItem.textContent = `${property.toUpperCase()}: ${
      userData[property]
    }`;

    infosContainer.append(liItem);
  }
}

calculatorButton.addEventListener("click", sumAllNumbers);
highlightButton.addEventListener("click", highlightLinks);
informationButton.addEventListener(
  "click",
  displayUserData
);
