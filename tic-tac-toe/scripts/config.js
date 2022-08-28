const editPlayer1Button =
  document.getElementById("edit-player1");
const editPlayer2Button =
  document.getElementById("edit-player2");
const closeModalButton =
  document.getElementById("cancel-button");
const startGameButton =
  document.getElementById("start-game");

const modalBackground = document.getElementById(
  "modal-background"
);
const playerModalContent = document.getElementById(
  "player-modal-content"
);
const modalForm = document.querySelector("form");
const inputModal = document.getElementById("player-name");

const pErrorMessage =
  document.getElementById("error-message");
const finalMessage =
  document.getElementById("final-message");
const boardGame = document.getElementById("board-game");
const fieldsGame = document.querySelector("#board-game ol");
const playerName = document.querySelector(
  "#board-game span"
);

editPlayer1Button.addEventListener(
  "click",
  openPlayerModal
);
editPlayer2Button.addEventListener(
  "click",
  openPlayerModal
);
closeModalButton.addEventListener(
  "click",
  closePlayerModal
);
startGameButton.addEventListener("click", openBoardGame);

modalBackground.addEventListener("click", closePlayerModal);
modalForm.addEventListener("submit", savePlayerName);

fieldsGame.addEventListener("click", selectField);
