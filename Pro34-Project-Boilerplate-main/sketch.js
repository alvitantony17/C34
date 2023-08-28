
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var ballImage;
var bgImage;
var hoop;
var button;
var player;
var line;
var line2;
var line3;
var score=0;
var score2 = 0

function preload(){
  ballImage=loadImage("basketball.png")
  bgImage=loadImage("background.jpg")
 
}


function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  
  
  let options={
    isStatic:true
  }
  let ball_options={
    restitution:0.8
  }
  ball = Bodies.circle(480,450,50,ball_options)
  World.add(world,ball)
  ground = Bodies.rectangle(400,685,2830,20,options)
  World.add(world,ground)
  line = Bodies.rectangle(1000,685,20,20,options)
  World.add(world,line)
  //line2 = Bodies.rectangle(1070,255,10,10,options)
  //World.add(world,line2)
  //line2.visible=false

  hoop = new basket (1200,800,450,450)

  button=createImg("button.png")
  button.position(100,100)
  button.size(200,100)
  button.mouseClicked(shoot)

  player=createImg("player.png")
  player.position(300,450)
  player.size(240,240)
  

  ellipseMode(CENTER)
  rectMode(CENTER)
 
  
}


function draw() 
{
  background(51);
  image(bgImage,0,0,2500,1800)
  
  image(ballImage,ball.position.x,ball.position.y,50,50)
  rect(ground.position.x,ground.position.y,800,20)
  push()
  rect(line.position.x,line.position.y,700,20)
  //rect(line2.position.x,line2.position.y,20,250)
  //fill("red")
  pop()
  //fill("green")

  

  fill("#FFFF");
  textAlign("center");
  textSize(80);
  text("Press Click here to shoot the ball " + score, 650, 100);

  if(ball.position.x>1000 && ball.position.y>600){
    over()
  }

  

  hoop.display()
  
  Engine.update(engine);
  
}

function shoot(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:-0.6})
}

function over() {
  World.remove(world,ball)

  fill("GREEN");
  textAlign("center");
  textSize(80);
  text("WELL PLAYED " + score2, 960, 200);

}
 

