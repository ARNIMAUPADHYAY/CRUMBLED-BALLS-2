
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbinImg= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(50,500,50);
	ground= new Ground(400,540,800,20);
	box1= new Dustbin(600,465,20,120);
	box2= new Dustbin(715,465,20,120);
	box3= new Dustbin(657,520,120,20);
	
    
	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  image(dustbinImg, 658,461, 145,140);
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:100, y:-100});
	}
}



