const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let playerId = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

function openPlayerModal(event) {
  playerId = event.target.dataset.playerid;
  inputModal.value = "";

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

  const playerNameElement = document.getElementById(
    `player-${playerId}-name`
  );

  playerNameElement.textContent = enteredName;

  players[playerId - 1].name = enteredName;

  closePlayerModal();
}
