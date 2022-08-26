function openPlayerModal() {
  modalBackground.style.display = "block";
  playerModalContent.style.display = "block";
}

function closePlayerModal() {
  modalBackground.style.display = "none";
  playerModalContent.style.display = "none";

  pErrorMessage.textContent = "";
  modalForm.classList.remove("error");
}

function savePlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredName = formData.get("playername").trim();

  if (!enteredName) {
    pErrorMessage.textContent =
      "Please insert a valid name.";
    modalForm.classList.add("error");
    return;
  }
}
