console.log("ok");
const background = ["bg0", "bg1", "bg2"];

// Get random Number
var numRand;
var max = 3;
numRand = Math.floor(Math.random() * max);

//Get Element
let pageBackground = document.querySelector("body");

//set class name from stored values
pageBackground.className = background[numRand];
