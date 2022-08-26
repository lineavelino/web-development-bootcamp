function openPlayerModal() {
  modalBackground.style.display = "block";
  playerModalContent.style.display = "block";
}

function closePlayerModal() {
  modalBackground.style.display = "none";
  playerModalContent.style.display = "none";
}

function savePlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredName = formData.get("playername");
  console.log(enteredName);
}
