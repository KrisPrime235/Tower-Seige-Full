const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;





function setup() {
	createCanvas(1450, 500);


	engine = Engine.create();
	world = engine.world;



	//Floor1lvl1
	Block1 = new Block(665, 430);
	Block2 = new Block(695, 430);
	Block3 = new Block(725, 430);
	Block4 = new Block(755, 430);
	Block5 = new Block(785, 430);
	Block6 = new Block(815, 430);
	Block7 = new Block(635, 430);
	
	//Floor1lvl2
	Block8 = new Block(755, 260);
	Block9 = new Block(725, 260);
	Block10 = new Block(695, 260);
	Block11 = new Block(785, 260);
	Block12 = new Block(665, 260);

	//Floor1lvl3
	Block13 = new Block(755, 220);
	Block14 = new Block(725, 220);
	Block15 = new Block(695, 220);

	//Floor1lvl4
	Block16 = new Block(725, 180);

	//Floor2lvl1
	Block17 = new Block(1090, 260);
	Block18 = new Block(1120, 260);
	Block19 = new Block(1150, 260);
	Block20 = new Block(1180, 260);
	Block21 = new Block(1210, 260);

	//Floor2lvl2
	Block22 = new Block(1120, 220);
	Block23 = new Block(1150, 220);
	Block24 = new Block(1180, 220);

	//Floor2lvl3
	Block25 = new Block(1150, 180);
	
	//Floors
	Floor1 = new Floor(725, 450, 250, 10);
	Floor2 = new Floor(1150, 300, 200, 10);

	//Polygon
	PolyBall1 = new PolyBall(200, 350, 50);

	//SlingShot
	Sling1 = new SlingShot(PolyBall1.body, {x: 200, y: 320}) 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(76, 58, 58);

  text("Knock off all the Blocks to gain Points! Press Space to retry.", 600, 10);
  

  
  
  
  
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  Block13.display();
  Block14.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();
  Block21.display();
  Block22.display();
  Block23.display();
  Block24.display();
  Block25.display();
  Floor1.display();
  Floor2.display();
  PolyBall1.display();
  Sling1.display();

  Block1.Score();
  Block2.Score();
  Block3.Score();
  Block4.Score();
  Block5.Score();
  Block6.Score();
  Block7.Score();
  Block8.Score();
  Block9.Score();
  Block10.Score();
  Block11.Score();
  Block12.Score();
  Block13.Score();
  Block14.Score();
  Block15.Score();
  Block16.Score();
  Block17.Score();
  Block18.Score();
  Block19.Score();
  Block20.Score();
  Block21.Score();
  Block22.Score();
  Block23.Score();
  Block24.Score();
  Block25.Score();

 

  
  
  Engine.update(engine);

  drawSprites();
 

}

function mouseDragged(){
    Matter.Body.setPosition(PolyBall1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Sling1.fly();
}

function keyPressed(){
    if(keyCode === 32){
    	Sling1.attach(PolyBall1.body);
    }
}


