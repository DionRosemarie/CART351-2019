/* OBJECT DEFINITION FOR A Free OBJECT SHAPE
constructor takes an initial xpos, ypos, width and height for the shape.
You also need to give the context and canvas associated
with the potential instance of this shape
*/
function FreeShapeObject(x,y,w,h,context,canvas){
  this.context =context;
  this.canvas = canvas;
  this.x =x;
  this.y =y;
  this.w=w;
  this.h=h;
  // method to display - needs to be filled in
  this.display = function(){

  }
  // method to update (animation) - needs to be filled in
  this.update = function(){

  }
}
