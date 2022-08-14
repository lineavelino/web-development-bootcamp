//1
const h1firstElement = document.body.firstElementChild;
const h1firstChild = document.body.children[0];
console.log(
  "Accessing the h1 by firstElementChild:",
  h1firstElement,
  "and accessing it by children[0]:",
  h1firstChild
);

//2 and bonus
console.log(
  "Accessing the h1 parent element:",
  h1firstChild.parentElement
);

console.log(
  "Accessing the h1 sibling element:",
  h1firstElement.nextElementSibling
);

//3
const h1ById = document.getElementById("greeting");
console.log("Accessing h1 by ID:", h1ById);

//4
const secondP = document.querySelector(".secondP");
console.log("Accessing the second paragraph:", secondP);

//5
secondP.childNodes[0].nodeValue =
  "This text was changed via JavaScript. Dummy ";
