/***** OBJECT DEFINITIONS  ***********************/
/* OBJECT DEFINITION FOR A SQUARE OBJECT SHAPE
constructor takes an initial xpos, ypos, width and height for the shape.
You also need to give the context and canvas associated
with the potential instance of this shape
*/
function FreeShapeObject(x, y, w, h, r, g, b, a, contextC, canvasAniC, speedX, speedY) {
  this.theta =0; //add in an angle (5)
  this.canvas = canvasAniC;
  this.context = contextC; // NEW PASS THE CONTEXT
  this.x =x;
  this.y =y;
  this.w = w;
  this.h=h;
  this.r =r;
  this.g =g;
  this.b=b;
  this.a=a;
  this.innerW = this.w/2;
  this.innerH = this.h/2;
  //add in when we update
  this.speedX = speedX;
  this.speedY = speedY;
  this.innerX = this.x+this.innerW/2;
  this.innerY = this.y+this.innerH/2;
  this.tx=0;
  this.vx = 10;
  this.vy = 10;

  this.display = function(){
    //lets draw something
  this.col = "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
  this.context.fillStyle = this.col;
  // save current state
  this.context.save();
  // translate the origin to the x and y positions....
  this.context.translate(this.x,this.y);

  // rotate the canvas -> but around the center of the rect
  this.context.rotate(this.theta);
  //increment theta
  this.theta+=0.02;
  // the coordinates are now relative to the new origin
  // please note: rects draw from corner so we want to shift it
  //up and left so that x,y is in its center
  this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);
  //do same for inner
  this.context.clearRect(-this.w/2+this.innerW/2,-this.w/2+this.innerW/2,this.innerW,this.innerH);


  //restore state
  this.context.restore();


}

//update
this.update = function(){

  //edges bouncing specifically for a rect with corner coords.
  if(this.x>(this.canvas.width-this.w)||this.x<0){
    this.speedX*=-1;
  }
  if(this.y>(this.canvas.height-this.h)||this.y<0){
    this.speedY*=-1;
  }

  //change by speed ...
  this.x+=this.speedX;
  this.y+=this.speedY;
  //need to update the inner vars here ....
  this.innerX = this.x+this.innerW/2;
  this.innerY = this.y+this.innerH/2;
}
}
