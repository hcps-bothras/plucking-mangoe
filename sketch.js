
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;
var constraint;
var hand;

function preload(){
	boy = loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1080,120,30);
	mango2 = new mango(1000,200,30);
	mango3 = new mango(1170,170,30);
	mango4 = new mango(950,120,30);
	mango5 = new mango(1030,50,30);
	mango6 = new mango(880,200,30);

	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	stoneObj = new stone(240,450,30,30);
	constraint = new constraintStone(stoneObj.body,{x: 240, y: 420});
	
	
}

function draw() {
//   Engine.run(engine);
  Engine.update(engine);

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  constraint.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    constraint.fly();
}

function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}