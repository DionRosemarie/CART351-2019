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
  //add in when we update
  this.speedX = speedX;
  this.speedY = speedY;
  this.tx=0;
  this.vx = 10;
  this.vy = 10;

  this.display = function(){
  this.col = "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
  this.context.fillStyle = this.col;
  this.context.save();
  this.context.translate(this.x,this.y);
  this.context.rotate(this.theta);
  this.theta+=0.02;
  this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);
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

  this.x+=this.speedX;
  this.y+=this.speedY;
  this.innerX = this.x+this.innerW/2;
  this.innerY = this.y+this.innerH/2;
}
}
