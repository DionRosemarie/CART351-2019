/* OBJECT DEFINITION FOR An Ellipse OBJECT SHAPE
constructor takes an initial xpos, ypos, width and height for the shape.
You also need to give the context and canvas associated
with the potential instance of this shape
*/
function EllipseShapeObject(x, y, w, h, r, g, b, a, contextB, canvasAniB, speedX, speedY) {
/*  this.context = contextB;
  this.canvas = canvasAniB;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.b = b;
  this.g = g;
  this.a = a;
  this.xPos = this.canvas.width/2;
  this.yPos = this.canvas.height/2;
  this.radius  = 20;
  this.startAngle = 0;
  this.endAngle = Math.PI * 2

  this.speedX = speedX;
  this.speedY = speedY;*/
  this.context = contextB;
  this.canvas = canvasAniB;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.b = b;
  this.g = g;
  this.a = a;
  this.xPos = this.canvas.width/2;
  this.yPos = this.canvas.height/2;
  this.radius  = 20;
  this.startAngle = 0;
  this.endAngle = Math.PI * 2

  this.speedX = speedX;
  this.speedY = speedY;

  // method to display - needs to be filled in
  // NEW DISPLAY
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
    this.theta+=0.05;
    // the coordinates are now relative to the new origin
    // please note: rects draw from corner so we want to shift it
    //up and left so that x,y is in its center
    this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);
    //do same for inner
    this.context.clearRect(-this.w/2+this.innerW/2,-this.w/2+this.innerW/2,this.innerW,this.innerH);
    //restore state
    this.context.restore();

  }


  // method to update (animation) - needs to be filled in
  this.update = function() {
    if (this.x > (this.canvas.width - this.w)|| this.x <0){
      this.speedX *= -1;
    }

    if (this.y > (this.canvas.height + this.h)|| this.x <0){
      this.speedY *= -1;
    }

    this.x -= this.speedX;
    this.y += this.speedY;

  }


}
