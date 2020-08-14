//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogimg,happyDogimg;
function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
  dog = createSprite(250,250,50,50);
  dog.addImage("dog",dogimg);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
 background(46,139,87);
 if(keyWentDown(UP_ARROW)){
  dog.addImage("dog",happyDogimg);
   writeStock(foodS);
}
  drawSprites();
  //add styles here
  textSize(50);
  fill("red");
  text("food left :"+foodS,100,40);
}
function readStock(data){
foodS = data.val();

}
function writeStock(x){
  
if(x<=0){
  x=0;
}else{
  x = x-1;

}
database.ref('/').update({
  Food : x 
})
}



