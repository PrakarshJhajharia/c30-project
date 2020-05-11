const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world , sling;
var b1,b11,b1111,b11111,b111111,b12,b122,b1222,b12222,b122222,b13,b133,b1333,b13333,b13333,b133333,b14,b144,b1444,b144444,b15,b155,b1555,b15555,b155555;
var g = 0;
var a = 500;
var b = 0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

b1= new Can(700,350)
b11= new Can(735,350)
b111= new Can(770,350)
b1111= new Can(805,350)
b11111= new Can(840,350)
b111111= new Can(875,350)
b12= new Can(910,350)
b122= new Can(945,350)
b1222= new Can(990,350)
b12222= new Can(735,315)
b122222= new Can(770,315)
b13= new Can(805,315)
b133= new Can(840,315)
b1333= new Can(875,315)
b13333= new Can(910,315)
b133333= new Can(945,315)
b14= new Can(770,280)
b144= new Can(805,280)
b1444= new Can(840,280)
b14444= new Can(875,280)
b144444= new Can(910,280)
b15= new Can(805,245)
b155= new Can(840,245)
b1555= new Can(875,245)
b15555= new Can(840,210)

bird1 = new Bd(200,370);
      sling1 = new SlingShot(bird1.body,{x:200 , y:300});
    ground = new Ground(600,height,1200,20);/*
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
*/
    bird = new Bird(200,370);
    
    
    sling = new SlingShot(bird.body,{x:200 , y:300});
    
}

function draw(){
  if(a >= 1 ){

  
  a = a-1
  }
  else {
    g = 100
  }
  
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    text(a + ' score '+b,100,100)
    //box1.display();
  // box2.display();
    ground.display();
    b1.display();
  b111.display();
    b11.display();
    b1111.display();
    b11111.display();
    b111111.display();
    b12.display();
    b122.display();
    b1222.display();
    b12222.display();
    b122222.display();
    b13.display();
    b133.display();
    b1333.display();
    b13333.display();
    b133333.display();
    b14.display();
    b144.display();
    b1444.display();
    b14444.display();
    b144444.display();
    b15.display();
    b155.display();
    b1555.display();
    b15555.display();
    
   /* pig1.display();
    log1.display();
    
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
*/  if(g==0){
  //delayTime(2)
  
  sling.display(); }
    bird.display();
    //platform.display();
    //sling1.display(); 
    
  //  mouseDragged()
    if(g == 10){
      //delayTime(2)
      
      sling1.display();
      bird1.display();
      
      
    }
}
function mouseDragged(){
Matter.Body.setPosition(bird.body , {x:mouseX , y:mouseY})
g = 0

sling.display

}
function mouseReleased(){
    sling.fly()
    g = 10
    b = b+1
}