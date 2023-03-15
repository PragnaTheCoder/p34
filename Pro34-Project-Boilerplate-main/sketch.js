
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

function preLoad(){
  backgroundImg = loadImage("Forest.jpg");
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}

function draw() 
{
  background(51);
  image(backgroundImg,0,0,width,height);
  
  Engine.update(engine);
  
}

