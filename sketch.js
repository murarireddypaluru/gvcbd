const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var maxDrops= 100
var drops = []
var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,1200), random(0,400)))
    }
    boywUmbrella = new UmBo(600, 300)
}

function draw(){
    background("white")
    for(var i = 0; i < drops.length; i++){
        drops[i].display()
    }
    boywUmbrella.display()
}
