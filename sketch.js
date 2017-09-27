function setup() {
  createCanvas(800,600);
}

function draw() {
  background(200,200,200);
  strokeWeight(6);
  //noStroke();
  //stroke(0,255,255,0);
  
  //colorMode(RGB);
  stroke(255,255,255,255);
  line(200,200,400,400); //if we want to hide sometigh, write the slash before 
  
  stroke(0,255,0);
  strokeWeight(10);
  fill(0,100,0);
  rect(50,50,300,150);
  
  stroke(255,0,0);
  strokeWeight(1);
  noFill();
  ellipse(350,50,10,10);
  
  noStroke();
  fill(0,200,200);
  ellipse(50,50,10,20);
  
  strokeWeight(2);
 //colorMode(HSB);
  stroke(255,0,0);
  line(400,400,800,800); 
  
}