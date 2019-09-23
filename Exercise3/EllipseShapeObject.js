/* OBJECT DEFINITION FOR An Ellipse OBJECT SHAPE
constructor takes an initial xpos, ypos, width and height for the shape.
You also need to give the context and canvas associated
with the potential instance of this shape
*/
function EllipseShapeObject(x, y, w, h, r, g, b, a, contextB, canvasAniB, speedX, speedY) {
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
  this.radius  = 50;
  this.startAngle = 0;
  this.endAngle = Math.PI * 2

  this.speedX = speedX;
  this.speedY = speedY;

  this.context.beginPath();
  // arc (x,y,radius, startAngle,endAngle,isCounterClockwise)
  this.context.arc(this.xPos,this.yPos,this.radius,this.startAngle,this.endAngle, true);
  this.context.fill(); // set the fill
  this.context.lineWidth=5; //change stroke weight
  this.context.stroke(); // set the outline

  this.context.closePath(); //close a path ...

  // method to display - needs to be filled in
  this.display = function() {
    this.context.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    this.context.fillRect(this.x, this.y, this.w, this.h);
  }

  // method to update (animation) - needs to be filled in
  this.update = function() {
    if (this.x > (this.canvas.width - this.w)|| this.x <0){
      this.speedX *= -1;
    }

    if (this.y > (this.canvas.height + this.h)|| this.x <0){
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;

  }


}
