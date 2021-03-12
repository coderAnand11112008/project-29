const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var BlueBlock;
var PinkBlock;
var GreyBlock;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    //piramid1
    bBlock1 = new BlueBlock(500,500,50,100); 
    bBlock2 = new BlueBlock(550,500,50,100);
    bBlock3 = new BlueBlock(600,500,50,100);
    bBlock4 = new BlueBlock(650,500,50,100);
    pBlock1 = new PinkBlock(575,400,50,100); 
    pBlock2 = new PinkBlock(575,400,50,100);
    pBlock3 = new PinkBlock(575,400,50,100);
    gBlock1 = new GreyBlock(600,300,50,100); 
    gBlock2 = new GreyBlock(650,300,50,100);
    bBlock5 = new BlueBlock(625,200,50,100);

    //piramid2
    bBlock6 = new BlueBlock(1000,600,50,100);
    bBlock7 = new BlueBlock(1025,600,50,100);
    bBlock8 = new BlueBlock(1050,600,50,100);
    bBlock9 = new BlueBlock(1100,600,50,100);
    pBlock4 = new PinkBlock(1075,500,50,100);
    pBlock5 = new PinkBlock(1075,500,50,100);
    pBlock6 = new PinkBlock(1075,500,50,100);
    gBlock3 = new GreyBlock(1100,400,50,100);
    gBlock4 = new GreyBlock(1150,400,50,100);
    bBlock10 = new BlueBlock(1125,300,50,100);
   
    //piramid3
    pBlock7 = new PinkBlock(625,600,50,100);
    pBlock8 = new PinkBlock(650,600,50,100);
    pBlock9 = new PinkBlock(675,600,50,100);
    pBlock10 = new PinkBlock(700,600,50,100);
    gBlock5 = new GreyBlock(675,500,50,100);
    gBlock6 = new GreyBlock(675,500,50,100);
    gBlock7 = new GreyBlock(675,500,50,100);
    gBlock8 = new GreyBlock(700,400,50,100);
    gBlock9 = new GreyBlock(750,400,50,100);
    gBlock10 = new GreyBlock(750,300,50,100); 
        
}

function draw(){
    background("black");
    Engine.update(engine);
    bBlock1.display();
    bBlock2.display();
    bBlock3.display();
    bBlock4.display();
    pBlock1.display();
    pBlock2.display();
    pBlock3.display();
    gBlock1.display();
    gBlock2.display();
    bBlock5.display();

    bBlock6.display();
    bBlock7.display();
    bBlock8.display();
    bBlock9.display();
    pBlock4.display();
    pBlock5.display();
    pBlock6.display();
    gBlock3.display();
    gBlock4.display();
    bBlock10.display();
    
    pBlock7.display();
    pBlock8.display();
    pBlock9.display();
    pBlock10.display();
    gBlock5.display();
    gBlock6.display();
    gBlock7.display();
    gBlock8.display();
    gBlock9.display();
    gBlock10.display();
}
