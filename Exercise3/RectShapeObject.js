/***** OBJECT DEFINITIONS  ***********************/
/* OBJECT DEFINITION FOR A SQUARE OBJECT SHAPE
constructor takes an initial xpos, ypos, width and height for the shape.
You also need to give the context and canvas associated
with the potential instance of this shape
*/
function RectShapeObject(x, y, w, h, r, g, b, a, contextA, canvasAniA, speedX, speedY) {
  this.context = contextA;
  this.canvas = canvasAniA
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.r = r;
  this.b = b;
  this.g = g;
  this.a = a;

  this.speedX = speedX;
  this.speedY = speedY;

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
