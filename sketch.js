var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var gameState="play"
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var counter=0;
var particle;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,800,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   

    
}

 


function draw() {
  background("black");
  textSize(20)
text("Score : "+score,20,30);
text("1000",20,600)
text("1000",100,600)
text("1000",180,600)
text("100",260,600)
text("100",340,600)
text("100",420,600)
text("500",500,600)
text("500",580,600)
text("500",660,600)
text("500",740,600)
  Engine.update(engine);
 
  ground.display()

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (counter===5){
     gameState="end"
   }
   if (gameState==="end"){
     text("GAME OVER",400,400)
   }

    
  
   console.log(mouseX)
      
    if (particle!=null){
      particle.display()
      if(particle.body.position.y>760){
        if (particle.body.position.x<248 ){
          score=score+1000
          particle=null
        }
        if(particle!=null && particle.body.position.x>248 && particle.body.position.x<490){
          score=score+100
          particle=null
        }
        if(particle!=null && particle.body.position.x>491){
          score=score+500
          particle=null
        }
      
    }
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    
    

}
function mousePressed(){
  if (gameState!="end"){
    //particles.push(new Particle(mouseX,10,10,10));
    particle=new Particle(mouseX,10,10,10)
    counter=counter+1
    
  }
}


