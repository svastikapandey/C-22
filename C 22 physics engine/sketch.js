//LIBRARY USED - matter.js
//to create a physics created as constants- Engine (physics), World(canvas), Bodies (objects)  

/* 
FUNCTION SETUP
1. Create the physics Engine inside a variable called 'engine' using 'Engine.create()'
2. Create a world for the physics Engine inside a vble called 'world' using 'engine.world'
3. Create a rectanguler or circular body using 'Bodies.rectangle(x,y,width,height)/Bodies.circle(x,y,r)' inside a variable
4. Add the bodies to the world --> World.add(where?, what?)
5. Give options to the bodies if necessary

FUNCTION DRAW
6. Inside the function draw, represent the Bodies.rectangle or Bodies.circle using 'rect' or 'ellipse'
7. Update the physics Engine using 'Engine.update(engine)'*/

/************************************************************************************************************ */
const Engine = Matter.Engine;       
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup(){

createCanvas(400,400);

//create the physics Engine inside the variable 'engine'--> Engine.create()
engine=Engine.create();

//create the world for the engine inside 'world'
world=engine.world;

//add options to the ground so that it bounces like a ball (restitution)
var ballOptions={restitution:1};

//create an object called ball using Bodies.circle(x,y,radius)
ball=Bodies.circle(200,100,30,ballOptions);

//add options to the ground so that it doesn't move (static)  inside a variable called 'groundOptions'
var groundOptions = {isStatic:true} 

//create an object called ground using Bodies.rectangle(x,y,width,height)
ground=Bodies.rectangle(200,380,400,20,groundOptions);

//adding the ball to the world
World.add(world,ball);

//adding the ground to the world
World.add(world,ground);

}

function draw(){
  background("black");

  //update the physics Engine
  Engine.update(engine);

  ellipseMode(RADIUS);

  //the ellipse's x and y position should be the ball's x and y position
  //ellipse(ball's x position,ball's y position,50,50);
  ellipse(ball.position.x,ball.position.y,30,30);
  
  
  rectMode(CENTER);
  //the rect's x and y position should be the ground's x and y position
  //rect(ground's x position,ground's y position,400,20);
  rect(ground.position.x,ground.position.y,400,20);


  drawSprites();

}
