
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var smallground;
var pin1,pin1Img,pin2,pin3,pin4,pin5,pin6;
function preload(){
pin1Img=loadImage("pinn.png");
}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
smallground=new Ground(400,470,800,20);
	
	ball = new Ball(170,195,100);

pin1= createSprite(770,430,20,20);
pin1.shapeColor="white";
pin1.scale=0.3;

pin1.addImage(pin1Img);
pin2= createSprite(700,430,20,20);
pin2.addImage(pin1Img);
pin2.scale=0.3;

pin3= createSprite(630,430,20,20);
pin3.addImage(pin1Img);
pin3.scale=0.3;
pin4= createSprite(660,410,20,20);
pin4.addImage(pin1Img);
pin4.scale=0.3;
pin5= createSprite(730,410,20,20);
pin5.addImage(pin1Img);
pin5.scale=0.3;
pin2.shapeColor="white";
pin3.shapeColor="white";
pin4.shapeColor="white";
pin5.shapeColor="white";
	pin6= createSprite(695,360,20,20);
	pin6.shapeColor="white";
	pin6.addImage(pin1Img);
pin6.scale=0.3;
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  
	Engine.update(engine);

	
	
	
	
  ball.display();
smallground.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  keyPressed();
 drawSprites();
 
  
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{ x : 130, y : - 130});
	
}}