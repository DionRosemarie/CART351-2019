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
  this.xPos = 2;
  this.yPos = 2;
  this.radius  = 50;
  this.startAngle = 0;
  this.endAngle = Math.PI * 2

  this.speedX = speedX;
  this.speedY = speedY;

  // method to display - needs to be filled in
  // NEW DISPLAY
    this.display = function(){
      this.col = "rgba("+this.r+","+this.g+","+this.b+","+this.a+")";
      this.context.fillStyle = this.col;

      this.context.beginPath();
      this.context.fillStyle = this.col;
      this.context.strokeStyle = this.strokeCol;
      this.context.lineWidth = 1;
      this.context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
      this.context.fill();
      this.context.stroke();
      this.context.closePath();

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
