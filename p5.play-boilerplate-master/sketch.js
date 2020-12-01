var rectangle1 
var rectangle2




function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(200, 200, 50, 100);
  rectangle2 = createSprite(200, 400, 100, 50);
  rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "red";

  console.log(rectangle1.width/2+rectangle2.width/2)
}

function draw() {
  background("black");  
  rectangle2.x = mouseX;
  rectangle2.y = mouseY;
if(rectangle2.x - rectangle1.x === 75){
rectangle1.shapeColor = "green";
rectangle2.shapeColor = "green";
}
else{
  rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "red";
}
  drawSprites();

}