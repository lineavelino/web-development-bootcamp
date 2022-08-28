let activePlayer = 0;
let round = 1;
let gameIsOver = false;

function openBoardGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set both players name.");
    return;
  }

  resetGame();

  playerName.textContent = players[activePlayer].name;
  boardGame.style.display = "block";
}

function switchPlayer() {
  activePlayer === 0
    ? (activePlayer = 1)
    : (activePlayer = 0);

  playerName.textContent = players[activePlayer].name;
  round++;
  const winnerId = checkGameOver();
  if (winnerId != 0) {
    endGame(winnerId);
  }
}

function selectField(event) {
  const field = event.target;
  const selectedColumn = field.dataset.col - 1;
  const selectedRow = field.dataset.row - 1;

  if (field.tagName !== "LI" || gameIsOver) {
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

function endGame(winnerId) {
  gameIsOver = true;
  finalMessage.style.display = "block";
  const h2 = finalMessage.firstElementChild;

  if (winnerId > 0) {
    h2.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    h2.textContent = "It's a draw";
  }
}

function resetGame() {
  gameIsOver = false;
  round = 1;
  finalMessage.style.display = "none";
  activePlayer = 0;
  playerName.textContent = players[activePlayer].name;
  finalMessage.firstElementChild.innerHTML =
    "You won, <strong>PLAYER NAME</strong>!";

  let gameBoardIndex = 0;
  for (let i = 0; i < gameData.length; i++) {
    for (let j = 0; j < gameData[i].length; j++) {
      gameData[i][j] = 0;
      const fieldGame = fieldsGame.children[gameBoardIndex];
      fieldGame.textContent = "";
      fieldGame.classList.remove("box-selected");
      gameBoardIndex++;
    }
  }
}
