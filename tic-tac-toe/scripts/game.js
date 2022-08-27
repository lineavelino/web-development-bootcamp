function openBoardGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set both players name.");
    return;
  }

  boardGame.style.display = "block";
}
