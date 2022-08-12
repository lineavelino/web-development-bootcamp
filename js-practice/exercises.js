//#region 1 and 2
let courseName = "100 days of code";
let priceCourse = 27.9;
let mainGoals = [
  "to be a Fullstack Developer",
  " reforce the basics web technologies",
  " practice programming everyday",
];

console.log(
  `The course ${courseName} costs ${priceCourse}. The main goals at the moment are: ${mainGoals}`
);
//#endregion

//#region 3 and 4
let course = {
  name: "Ignite",
  price: 1000,
  mainGoals: [
    "learn React",
    "to be a FrontEnd Developer",
    "improve hard skills",
  ],
};

console.log(
  `My second main goal with the course ${course.name} is ${course.mainGoals[1]}`
);
//#endregion

//#region 5 and 6
function accessListElementById(list, identifier) {
  return list[identifier];
}

console.log(
  `I'm accessing the list element using a function: ${accessListElementById(
    mainGoals,
    1
  )}`
);
//#endregion
