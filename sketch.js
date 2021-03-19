const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var sling;
var poly;
var block1, block2, block3, block4, block5, block6, block7, block8, 
    block9, block10, block11, block12, block13, block14, block15, block16;

function preload(){
	poly = loadImage("polygon.png");

}

function setup(){
	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;

  block1 = new Block(300,275);
  block2 = new Block(330,270);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  block16 = new Block(360,155);

  poly = new Polygon(100,300,Pi/2);

  sling = new Slingshot(this.poly, {x:100,y:200});
}

function draw() {

  background(230);34
  //Add code for displaying text here!

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  poly.display();

  sling.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    sling.fly();

}

function keyPressed(){
  Matter.Body.setPosition(poly.body, {x:235,y:420});
  sling.attach(poly.body);
  
}

function detectollision(lpolygon,lblock){
  polyBodyPosition = lpolygon.body.position;
  blockBodyPosition = lblock.body.position;

  var distance = dist(polyBodyPosition.x , polyBodyPosition.y , blockBodyPosition.x , blockBodyPosition.y);

  if(distance <= poly.r + block.x){
    Matter.Body.setStatic(lblock.body,false);
 
  }

}