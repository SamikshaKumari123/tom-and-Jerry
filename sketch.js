var canvas,canvasImg;
var cat,catImg,catImg2,catImg3;
var rat,ratImg1,ratImg2,ratImg3;
function preload() {
    //load the images here
    canvasImg=loadImage("garden.png ");
    catImg2=loadAnimation("cat1.png");
    catImg3=loadAnimation("cat4.png");
    catImg=loadAnimation("cat2.png","cat3.png");

    ratImg2=loadAnimation("mouse1.png");
    ratImg3=loadAnimation("mouse4.png");
    ratImg1=loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
   canvas= createCanvas(1000,800);
    cat=createSprite(870,600);
    cat.addAnimation("topo",catImg);
    cat.scale=0.2;
    rat=createSprite(200,600);
    rat.addAnimation("tobo",ratImg1);
    rat.scale=0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(canvasImg);
    cat.velocityX=-3;
    //Write condition here to evalute if tom and jerry collide
       if(cat.x-rat.x<cat.width/2-rat.width/2){
           cat.velocityX=0;
           cat.addAnimation("coco",catImg3);
           cat.x=300
           cat.scale=0.2;
           cat.changeAnimation("coco");
           rat.addAnimation("toto",ratImg3);
           rat.scale=0.2;
           rat.changeAnimation("toto");
       }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX= -5;
      cat.addAnimation("coto",catImg2);
      cat.changeAnimation("coto");
      rat.addAnimation("tomo",ratImg2);
      rat.changeAnimation("tomo");

  }

}
