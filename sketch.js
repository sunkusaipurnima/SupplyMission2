
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxbase,boxleft,boxright;
var package;
var canvas;



function setup() {
	canvas=createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	 boxbase = new Box(400,490,200,20);
	 boxleft = new Box(300,450,20,100);
	 boxright= new Box(500,450,20,100);

	package = new Package(450,80,50,50);
}


function draw() {	
  
  background(0);
  Engine.update(engine);
  
 boxbase.display();
   boxleft.display();
   boxright.display();

  package.display();

  

}

// function keyPressed() {
//  if (keyCode === DOWN_ARROW) {
//     // Look at the hints in the document and understand how to make the package body fall only on
// 	//packageBody.isStatic=false;
// 	Body.setStatic(packageBody,false);

// 	console.log(packageBody.isStatic);
//   }
// }



