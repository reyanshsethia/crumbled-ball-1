
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin , crumbled,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	
	


	engine = Engine.create();
	world = engine.world;
crumbled = new Crumbled (450,50,20)
ground= new Ground ()
bin = new Bin(600,550,10,70)
bin2=new Bin(700,550,10,70)
bin3= new Bin(650,580,90,10)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  crumbled.displayBall()
  ground.displayGround()
  bin.displayBin()
  bin2.displayBin()
  bin3.displayBin()
  drawSprites();
 
}



