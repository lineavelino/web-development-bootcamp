//#region Calculator
const inputNumber = document.getElementById("user-number");
const calculatorButton = document.querySelector(
  "#calculator button"
);
const outputSum = document.getElementById("calculated-sum");
//#endregion

//#region Highlight links
const highlightButton = document.querySelector(
  "#highlight-links button"
);
const links = document.querySelectorAll(
  "#highlight-links a"
);
//#endregion

//#region User data
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
//#endregion

//#region Statistics
const statisticsButton = document.querySelector(
  "#statistics button"
);
const inputNumberDice = document.getElementById(
  "user-target-number"
);
const diceNumbersContainer =
  document.getElementById("dice-rolls");
const spanOutputRolls = document.getElementById(
  "output-total-rolls"
);
const spanOutputTarget = document.getElementById(
  "output-target-number"
);
//#endregion

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

function rollTheDice() {
  const targetNumber = inputNumberDice.value;
  let diceNumber;
  let roll = 0;

  diceNumbersContainer.innerHTML = "";

  if (targetNumber > 0) {
    while (targetNumber != diceNumber) {
      const liItem = document.createElement("li");

      diceNumber = Math.floor(Math.random() * 6) + 1;

      liItem.textContent = `Roll ${
        roll + 1
      }: ${diceNumber}`;

      diceNumbersContainer.append(liItem);

      roll++;
    }
  }

  spanOutputRolls.textContent = roll;
  spanOutputTarget.textContent = targetNumber;
}

calculatorButton.addEventListener("click", sumAllNumbers);
highlightButton.addEventListener("click", highlightLinks);
informationButton.addEventListener(
  "click",
  displayUserData
);
statisticsButton.addEventListener("click", rollTheDice);
