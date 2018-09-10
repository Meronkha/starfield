// Starfield.js

let starCount = 2000;
let stars = [];
let width = 600;
let height = 600;
let starCol = 255;
let spaceCol = 0;



function setup(){
  createCanvas(600,600);
  for(let i = 0; i < starCount; i++){
    // Creating an array of star objects
    stars.push(new Star());

  }
}

function draw(){
  speed = map(mouseX,0,width,5,25);
  background(spaceCol);
  translate(width/2,height/2);
  // Loop through array and update/show each of them
  for(let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();

  }
}
