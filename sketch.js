
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(330,100,300,20);
	bob1 = new Bob(250,320,50);
	bob2 = new Bob(300,320,50);
	bob3 = new Bob(350,320,50);
	bob4 = new Bob(400,320,50);
	bob5 = new Bob(450,320,50);

	rope1 = new Rope(bob1.body, roof.body, -120, 5)
	rope2 = new Rope(bob2.body, roof.body, -70, 5)
	rope3 = new Rope(bob3.body, roof.body, -20, 5)
	rope4 = new Rope(bob4.body, roof.body, 30, 5)
	rope5 = new Rope(bob5.body, roof.body, 80, 5)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,200,40)
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-150,y:-140})
	
	}
}


