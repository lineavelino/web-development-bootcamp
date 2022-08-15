let productInput = document.querySelector("input");

function getInputText(event) {
  let enteredText = event.target.value;
  console.log(enteredText);
  console.log(enteredText.length);
}

productInput.addEventListener("input", getInputText);
