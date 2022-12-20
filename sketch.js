var q1

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  q1 = new Riddle(1)
  ans = new Answer();

  door = createSprite(width - 100, 250, 60, 60)
}

function draw(){
background(100)
 answer = q1.showQues()
ans.handleMousePressed();
 
 if(answer = ans.answer){
  console.log("win")
  drawSprites();
 }

}

