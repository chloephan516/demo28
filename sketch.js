
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/7,20);
	bobD = 40;
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 500;
	bob1 = new Bob(startBobPositionX-bobD*2,startBobPositionY,bobD);
	rope1 = new Rope(bob1.body,roof.body,-bobD*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  rope1.display();
  drawSprites();
 
}



