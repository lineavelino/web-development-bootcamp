let activePlayer = 0;
let round = 1;

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
  round++;
  checkGameOver();
}

function selectField(event) {
  const field = event.target;
  const selectedColumn = field.dataset.col - 1;
  const selectedRow = field.dataset.row - 1;

  if (field.tagName !== "LI") {
    return;
  }

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field.");
    return;
  }

  field.textContent = players[activePlayer].symbol;
  field.classList.add("box-selected");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  switchPlayer();
}

function checkGameOver() {
  if (round > 9) {
    return -1;
  }

  for (let i = 0; i < gameData.length; i++) {
    //check rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }

    //check columns
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //check diagonal top left to bottom right
  if (
    gameData[1][1] > 0 &&
    gameData[1][1] === gameData[0][0] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[1][1];
  }

  //check diagonal bottom left to top right
  if (
    gameData[1][1] > 0 &&
    gameData[1][1] === gameData[2][0] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[1][1];
  }

  return 0;
}
