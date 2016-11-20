var butterflies = [];
var flowerX = [];
var flowerHeight = [];
var flowerRot = [];
var flowerColor = [];
var flowerScale = [];
var flowerX2 = [];
var flowerHeight2 = [];
var flowerRot2 = [];
var flowerColor2 = [];
var flowerScale2 = [];
var stars = [];
var count = 0;
var butterflyCount = 5;
//http://education.francetv.fr/matiere/litterature/cinquieme/video/tant-de-forets
function setup(){
	createCanvas(1000, 600);
	   for(var i = 0; i < 1000; i += random(random(0, 200), random(200, random(300, random(400, random(500, 1000)))))){
		   for(var j = 0; j < 200; j += random(0, random(60, random(150, 200))))
		   {
			   var star = {};
			   star.x = i+ random(-40, 40);;
			   star.y = j + random(-40, 40);
			   star.s = random(1, random(1, random(1, 4)));
			   stars.push(star);
		   }
	   }
	   // little flowers
	   x = 50;
	   for(var i = 0; i < 10; i++)
	   {
		  flowerX2.push(x);
		  flowerHeight2.push(random(50, 300));
		  flowerRot2.push(random(-PI/30, PI/30));
		  flowerColor2.push(color(random(80,180), random(80,180), random(80,180), random(110, 170)));
		  flowerScale2.push(random(0.10, 0.20));
		  x += 100
	   }


	   // big flowers
	   x = 50;
	   for(var i = 0; i < 5; i++)
	   {
		  flowerX.push(x);
		  flowerHeight.push(random(100, 800));
		  flowerRot.push(random(-PI/30, PI/30));
		  flowerColor.push(color(random(100,112), random(15, 22), random(35, 44), random(150, 200)));
		  flowerScale.push(random(0.25, 0.5));
		  x += random(160, 220);
	   }
	for(var i = 0; i < butterflyCount; i++)
	{
		var butterfly = {};
		butterfly.t = 0;
		butterfly.delay = random(0, 180);
		butterfly.delayT = 0;
		butterfly.rotate = flowerRot[i];
		butterfly.x = flowerX[i];
		butterfly.y = 700 - flowerHeight[i]/2;
		butterfly.leftWing = {};
		butterfly.rightWing = {};
		var rt = random(-PI/16, PI/16);
		butterfly.leftWing.rotate = rt;
		butterfly.rightWing.rotate = rt;
		var wingSpeed = random(1, 200); 
		butterfly.leftWing.speed = wingSpeed;
		butterfly.flapSpeed = random(1, 3);
		butterfly.leftWing.width = 1.1;
		butterfly.leftWing.direction = 1;
		butterfly.rightWing.direction = 1;
		butterfly.rightWing.width = 1;
		butterfly.rightWing.speed = wingSpeed;
		butterfly.start = true;
		butterfly.timer = 0;
		butterfly.initX = butterfly.x;
		butterfly.initY = butterfly.y;
		butterfly.masterRot = 0;
		butterfly.down = true;
		butterfly.lastState = null;
		butterfly.scale = 1;
		butterfly.state = "idle";
		butterfly.speed = 1.5;
		butterflies.push(butterfly);
	}
}
function draw(){

   drawBackground();

   // flowers
   for (var i=0; i < flowerX.length; i++)
   {
	   
		drawFlower(flowerX[i], flowerHeight[i], 0, flowerColor[i], flowerScale[i]);
   }
	for (var i=0; i < flowerX2.length; i++)
   {
	   
		drawFlower(flowerX2[i], flowerHeight2[i], 0, flowerColor2[i], flowerScale2[i]);
   }
	fill(255);
	for(var i = 0; i < butterflyCount; i++){
		push();
		if(butterflies[i].state === "up")
		{
			if(butterflies[i].delayT++ >= butterflies[i].delay){
				count++;
				if(count >= 120){
					butterflies[i].state = "right";
				}else{
					butterflies[i].initY = butterflies[i].y;
					butterflies[i].initX = butterflies[i].x;
					butterflies[i].y -= 2*butterflies[i].flapSpeed;
				}
			}
		}else if(butterflies[i].state === "right"){
			
				butterflies[i].y = butterflies[i].initY - 300*sin(Math.abs(butterflies[i].t*butterflies[i].flapSpeed - PI));
				if(butterflies[i].t < PI /6)
					butterflies[i].x = butterflies[i].initX+400 + 400*cos(PI - butterflies[i].t*butterflies[i].flapSpeed);
				else
					butterflies[i].x += 3*butterflies[i].flapSpeed;
				butterflies[i].t+= PI/360;
		}
		butterflyAnimation(butterflies[i]);
		pop();

	}
}
function butterflyAnimation(bf){
	push();
		translate(bf.x, bf.y);
		scale(bf.scale/4);
		if(bf.state == "idle"){
			idle(bf);
		}else if(bf.state == "up"){
			flyUp(bf);
		}else if(bf.state == "right"){
			flyRight(bf);
		}
		else if(bf.state == "up"){
			flyUP(bf);
		}
	pop();
}
function mouseClicked(){
	for(var i = 0; i < butterflyCount; i++)
	butterflies[i].state = "up";
}


 function drawFlower(x, flowerHeight, rot, c, scaleFactor){
	push();
		translate(x, height); // translate to bottom of canvas
    rotate(rot);
    scale(scaleFactor);

    fill(244, 213, 122);
		rect(0, -flowerHeight, 3, flowerHeight); // draw stem

    fill(251, 190, 159);
		ellipse(0, -flowerHeight - 90, 200, 180); // inside of flower

    fill(c);
    // draw left petal
		push();
			translate(0, -flowerHeight); // translate to top of stem
			drawPetal();
		pop();

    // draw right petal
		push();
			translate(0, -flowerHeight); // translate to top of stem
      scale(-1, 1);
			drawPetal();
		pop();

    //middle antenna
  		stroke(0, 0, 0, 90);
  		strokeWeight(1);
  		push();
  			translate(0, -flowerHeight);
        scale(6);
  			line(0, 0, 0, -40);
  			noStroke();
  			ellipse(0, -40, 8, 8);
  		pop();
  		//right antenna
  		stroke(0, 0, 0, 90);
  		strokeWeight(1);
  		push();
  			translate(0, -flowerHeight);
        scale(5);
  			beginShape();
  				curveVertex(0, 0);
  				curveVertex(0, 0);
  				curveVertex(2, -10);
  				curveVertex(8, -20);
  				curveVertex(10, -22);
  				curveVertex(12, -25);
  				curveVertex(14, -27);
  				curveVertex(17, -30);
  				curveVertex(25, -32);
  			endShape();
  			noStroke();
  			ellipse(20, -32, 8, 8);
  		pop();
  		//left antenna
  		stroke(0, 0, 0, 90);
  		strokeWeight(1);
  		push();
  			translate(0, -flowerHeight);
        scale(5);
  			beginShape();
  				curveVertex(0, 0);
  				curveVertex(0, 0);
  				curveVertex(-2, -10);
  				curveVertex(-8, -20);
  				curveVertex(-10, -22);
  				curveVertex(-12, -25);
  				curveVertex(-14, -27);
  				curveVertex(-17, -30);
  				curveVertex(-25, -32);
  			endShape();
  			noStroke();
  			ellipse(-20, -32, 8, 8);
  		pop();

    pop();
	pop();
}


 function drawPetal() {
	beginShape();
	vertex(0.2, 0);
	bezierVertex(3.7, -23.833, 11.917, -47.833, 24.85, -72);
	bezierVertex(27.783, -77.533, 30.983, -83.083, 34.45, -88.65);
	bezierVertex(48.05, -110.583, 65.5, -132.667, 86.8, -154.9);
	bezierVertex(108.4, -180.1, 136.983, -192.767, 172.55, -192.9);
	bezierVertex(203.85, -189.567, 224.483, -173.917, 234.45, -145.95);
	bezierVertex(244.417, -118.117, 241.233, -91.533, 224.9, -66.2);
	bezierVertex(196.5, -25.8, 121.6, -3.733, 0.2, 0);
	endShape();

}


//draw gradient background
function drawBackground()
{
	strokeWeight(0);
	blue = 130;
	red = 30;
	green = 100;
	y = 0;
	while(y < 600)
	{
		fill(red, green, blue)
		rect(0, y, 1000, 10);

		red += 5;
		y += 10;

	}
	fill(255);
	for(var i = 0; i < stars.length; i++){
		ellipse(stars[i].x, stars[i].y, stars[i].s);
	}
}
