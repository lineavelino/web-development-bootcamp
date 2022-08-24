const editPlayer1Button =
  document.getElementById("edit-player1");
const editPlayer2Button =
  document.getElementById("edit-player2");
const closeModalButton =
  document.getElementById("cancel-button");

const modalBackground = document.getElementById(
  "modal-background"
);
const playerModalContent = document.getElementById(
  "player-modal-content"
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
modalBackground.addEventListener("click", closePlayerModal);
