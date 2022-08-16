//1 and 3
const firstButton = document.querySelector("button");
const secondButton =
  document.getElementById("secondButton");

const firstParagraph =
  document.body.children[2].children[1];
const thirdParagraph =
  document.body.children[2].children[3];

//2 and 4
function removesFirstParagraph() {
  console.dir(firstButton);

  thirdParagraph.remove();
}

function changeParagraphBackgroundColor(event) {
  console.dir(event.target);

  firstParagraph.style.backgroundColor = "#6FA2FF";
  firstParagraph.className = "paragraphBackground";
}

firstButton.addEventListener(
  "click",
  removesFirstParagraph
);
secondButton.addEventListener(
  "click",
  changeParagraphBackgroundColor
);
