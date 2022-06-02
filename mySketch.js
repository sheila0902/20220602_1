function preload(){
	catImg = loadImage("cat111.png");
	dogImg =loadImage("dog111.png");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	//frameRate(5)
}

function draw() {
  background(255);
	imageMode(CENTER)
	
	push()
	fill("#79C4CC")
	noStroke()
	ellipse(width/2,height/2,400+sin(frameCount/30)*100)

	
	pop()
	
	for(var x=0;x<width;x=x+200){
	for(var y=0;y<height;y=y+200){
  push()
		translate(x,y+sin(frameCount/100+x+y)*100);
		rotate(sin(frameCount/10+x+y))
	 	//imageMode(CENTER)
    image(catImg,0,0,100,100);
	pop()
	image(dogImg,mouseX,mouseY,300,300);		
 //rotate(sin(frameCount/100));
//image(catImg,x+random(-2,2),y+sin(frameCount/100+x+y)*,200,100)

			} 
	 }
}
