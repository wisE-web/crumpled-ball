
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  ground = new Ground (400,639,800,10);   
  box1 = new Ball(40,200,20);
  box2 = new Box(500,557,20,100);
  box3 = new Box(420,615,200,20);
  box4 = new Box(333,557,20,100);
  
  keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  fill("red");
  ground.display();
  drawSprites();
 
}

function keyPressed () { 
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(box1.body,box1.body.position,{x:40,y:-70});
  }
}


