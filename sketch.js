const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score;

function setup() {
  createCanvas(800,800); 
  engine = Engine.create();
  world = engine.world;

  score = 0;

  ball = new Bird(100, 500);
  
  band = new SlingShot(ball.body, {x:100, y:500})

  plat = new Ground(400, 595, 250, 15);
  plat1 = new Ground(600, 395, 250, 15);

  box1 = new Box(330, 550, 30, 30);
  box2 = new Box(360, 550, 30, 30);
  box3 = new Box(390, 550, 30, 30);
  box4 = new Box(420, 550, 30, 30);
  box5 = new Box(450, 550, 30, 30);
  box6 = new Box(480, 550, 30, 30);
  box7 = new Box(510, 550, 30, 30);

  box8 = new Box(375, 520, 30, 30);
  box9 = new Box(405, 520, 30, 30);
  box10 = new Box(435, 520, 30, 30);
  box11= new Box(465, 520, 30, 30);
  box12 = new Box(495, 520, 30, 30);

  box13 = new Box(390, 490, 30, 30);
  box14 = new Box(420, 490, 30, 30);
  box15 = new Box(450, 490, 30, 30);

  box16 = new Box(420, 500, 30, 30);


  box17 = new Box(530, 350, 30, 30);
  box18 = new Box(560, 350, 30, 30);
  box19 = new Box(590, 350, 30, 30);
  box20 = new Box(620, 350, 30, 30);
  box21 = new Box(650, 350, 30, 30);
  box22 = new Box(680, 350, 30, 30);
  box23 = new Box(710, 350, 30, 30);

  box24 = new Box(575, 320, 30, 30);
  box25 = new Box(605, 320, 30, 30);
  box26 = new Box(635, 320, 30, 30);
  box27 = new Box(665, 320, 30, 30);
  box28 = new Box(695, 320, 30, 30);

  box29 = new Box(590, 390, 30, 30);
  box30 = new Box(620, 390, 30, 30);
  box31 = new Box(650, 390, 30, 30);

  box32 = new Box(620, 300, 30, 30);

}

function draw() {
  Engine.update(engine);
  background(255);


  ball.display();
  plat.display();
  plat1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();
  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();

  box13.score();
  box14.score();
  box15.score();

  box16.score();


  

  band.display();
  drawSprites();

  text("Score: " + score, 200, 200);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  band.fly();
}

function keyPressed() {

  if (keyCode === 32) {

      band.attach(ball.body);

  }

}