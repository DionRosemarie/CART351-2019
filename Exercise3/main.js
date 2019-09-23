window.onload = function(){


let mouseIn = 'none'; // this variable will keep track of when and if the mouse is within one of the canvas(es)

// this event handler will register in which box is the mouse
 let mouseoverhandler = function(event){
  mouseIn = event.target.id;
  console.log("the mouse is over canvas:: "+mouseIn);
}
// this event handler will register that the mouse is no longer over a particular box
let mouseouthandler = function(event){
  console.log("the mouse is no longer over canvas:: "+event.target.id);
 mouseIn = 'none';
}

/* STEP 1:
/* THis is showing you how to access the canvas associated with the first box
It also shows you how to access the associated drawing context
and adding the relevent event listeners. You can follow this code for
accessing the other canvases and their associated contexts.
*/


let canvas = document.getElementById("canvas")
let canvasAniA = document.getElementById("canvasAniA")
let canvasAniB = document.getElementById("canvasAniB")
let canvasAniC = document.getElementById("canvasAniC")
//get the context
let context = canvas.getContext("2d");
let contextA = canvasAniA.getContext("2d");
let contextB = canvasAniA.getContext("2d");
let contextC = canvasAniA.getContext("2d");

// register event listeners with 1st box
canvasAniA.addEventListener('mousemove',mouseoverhandler );
canvasAniA.addEventListener('mouseout',mouseouthandler);


/* STEP 2:: CREATE 10 RectShapeObject instances and put into the rectList */
/*** The lists of objects that will be indide each canvas **/
let rectList = [];// variable to hold your list of rectangles
const NUM_RECTS = 10;
for(let i=0; i< NUM_RECTS; i++){
rectList.push(new RectShapeObject((i*55),canvasAniA.height/2,10,10,144,0,0,1.0,contextA,canvasAniA,5,5));
}

/* STEP 3:: CREATE 10 EllipseShapeObject instances and put into the ellipsesList */
let ellipseList = [];// variable to hold your list of rectangles
const NUM_ELLS = 10;
for(let i=0; i< NUM_ELLS; i++){
ellipseList.push(new EllipseShapeObject((i*55),canvasAniB.height/2,50, 50,144,0,144,1.0,contextB,canvasAniB,5,5));
}
  requestAnimationFrame(draw);
/* STEP 4:: CREATE 10 FreeShapeObject instances and put into the freeShapeList */


function draw() {
  context.clearRect(0,0,canvasAniA.width,canvasAniA.height);
  for(let i=0; i<rectList.length;i++){
    rectList[i].display();
    rectList[i].update();
    ellipseList[i].display();
    ellipseList[i].update();
  }

  requestAnimationFrame(draw);
}

/* STEP 5:: implement the display and update methods for each shape
(RectShapeObject,EllipseShapeObject,FreeShapeObject)
using the Object definitions I have given you as a starting point.
The animation and design of your shape(s) is up to you */

/**** ANIMATION CODE *****************/
requestAnimationFrame(animationLoop);
 /*MAIN ANIMATION LOOP */
function animationLoop(){

  if(mouseIn ==="canvasAniA"){
    console.log("over canvas A");
    // put code here to display and update contents in canvasAniA
    /* STEP 6:: go through the rectList  and display and update shapes  */

  }
  else if(mouseIn ==="canvasAniB"){
      console.log("over canvas B");
      // put code here to display and update contents in canvasAniB
      /* STEP 7:: go through the ellipsesList  and display and update shapes  */

  }
  else if(mouseIn ==="canvasAniC"){
      console.log("over canvas C");
      // put code here to display and update contents in canvasAniC
        /* STEP 8:: go through the freeShapeList  and display and update shapes  */

  }
  requestAnimationFrame(animationLoop);
}

} //on load
