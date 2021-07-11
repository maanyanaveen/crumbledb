var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundobject,leftside,rightside;
var world;
var radius = 20;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	groundobject = new Ground(width/2,670,width,20);
	leftside =new Ground(1100,600,20,120);
	rightside = new Ground(1350,600,20,120);
	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
     restitution:0.3,
 friction:0,
 density:1.2
	}
	ball = Bodies.circle(200,100,radius/2,ball_options);

    World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);	


	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobject.display();
  leftside.display();
  rightside.display();

  ellipse(ball.position.x,ball.position.y,radius,radius);
  drawSprites();
 
}

function verticalforce(){
	Matter.Body.applyForce(ball,ball.position,{y:0.05,x:0});
  }
  

