// Star.js

new p5()  // Need this to draw outside the draw function p5
let speed = 5;

class Star {
  constructor(){
  this.x = int(random(-width,width));
  this.y = int(random(-height,height));
  this.z = int(random(0,height));
  }

  update (){
    this.z = this.z - speed;

    if (this.z < 1){
      this.x = int(random(-width,width));
      this.y = int(random(-height,height));
      this.z = int(random(0,width));
    }
  }

  show (){
    let sx = map(this.x/this.z,0,1,0,width);
    let sy = map(this.y/this.z,0,1,0,height);
    let r = map(this.z,height,0,0,5);
    if (mouseIsPressed){
      starCol = 0;
      spaceCol = 255;
    }
    else{
      starCol = 255;
      spaceCol = 0;
    }
    fill(starCol);
    ellipse(sx,sy,r,r);

  }
}
