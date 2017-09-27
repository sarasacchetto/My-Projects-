function setup() {
  createCanvas(800,600);
}

function draw() {
  
  background(200,200,200); //if we keep the opacity 50, the circle moves with a "tail"
                // if we hide the background, the circles follows each other
  
  fill(255,0,0); //red
 rect(50,50,200,350);
 
  fill(0,255,0); //green
 rect(150,150,500,500);
 
  fill(0,0,255);  //blue
 rect(100,100,400,400);
 
  fill(200,200,200);  //grey
 rect(40,40,100,100);
 
 
 ellipse(width/2,height*0.5, 150, 150);
 ellipse(   (width/4)*3,height*0.5, 150, 150);
 
 fill(0,0,255);
 //ellipse(mouseX,mouseY,100,100);
line(pmouseX,pmouseY,mouseX,mouseY);  //col background attivo si ha una linea  finita, col background disattivato si disegna veramente.
 
}