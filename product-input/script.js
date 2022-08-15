const paragraph = document.querySelector(
  "#input-container p"
);
const productInput = document.querySelector("input");

let maxLength = 60;
let availableLength = maxLength;
let usedChar = 0;

paragraph.textContent = `${availableLength}/${maxLength}`;

productInput.addEventListener(
  "input",
  updateAvailableLength
);

function updateAvailableLength(event) {
  getInputText(event);
  availableLength = maxLength - usedChar;
  paragraph.textContent = `${availableLength}/${maxLength}`;
}

function getInputText(event) {
  let enteredText = event.target.value;
  usedChar = enteredText.length;
  return usedChar;
}
