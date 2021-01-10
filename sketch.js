
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

   dustbin=new Dustbin(1200,600);
   paper = new Paper(200,400,35);
   ground=new Groud(width/2,670,width,20);

    

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
 
  dustbin.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
   if (keyCode===UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
   }
}



