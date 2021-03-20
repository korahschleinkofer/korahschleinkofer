console.log("ok");
const background = ["bg0", "bg1", "bg2"];

// Get random Number
var numRand;
var max = 3;
numRand = Math.floor(Math.random() * max);

//Get Element
let pageBackground = document.querySelector("header");

//set class name from stored values
pageBackground.className = background[numRand];

lightGallery(document.getElementById("gallery"));

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
