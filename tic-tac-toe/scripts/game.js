let activePlayer = 0;

function openBoardGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set both players name.");
    return;
  }

  playerName.textContent = players[activePlayer].name;
  boardGame.style.display = "block";
}

function switchPlayer() {
  activePlayer === 0
    ? (activePlayer = 1)
    : (activePlayer = 0);

  playerName.textContent = players[activePlayer].name;
}

function selectField(event) {
  const field = event.target;

  if (field.tagName !== "LI") {
    return;
  }

  field.textContent = players[activePlayer].symbol;
  field.classList.add("box-selected");

  switchPlayer();
}
