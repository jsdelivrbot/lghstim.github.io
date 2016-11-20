var flowerX = [];
var flowerHeight = [];
var flowerRot = [];
var flowerColor = [];
var flowerScale = [];
var bg;

function setup()
{
   createCanvas(1000, 600);
   bg = loadImage("tantdeforets_background.png");

   // little flowers
   x = 0;
   for(var i = 0; i < 6; i++)
   {
      flowerX.push(x);
      flowerHeight.push(random(50, 300));
      flowerRot.push(random(-PI/30, PI/30));
      flowerColor.push(color(random(80,180), random(80,180), random(80,180), random(110, 170)));
      flowerScale.push(random(0.10, 0.20));
      x += 225
   }


   // big flowers
   x = 50;
   for(var i = 0; i < 5; i++)
   {
      flowerX.push(x);
      flowerHeight.push(random(150, 800));
      flowerRot.push(random(-PI/30, PI/30));
      flowerColor.push(color(random(100,112), random(15, 22), random(35, 44), random(150, 200)));
      flowerScale.push(random(0.25, 0.5));
      x += 250;
   }
   noStroke();
}

function draw()
{
   //background(bg);
   drawBackground();

   // flowers
   for (var i=0; i < flowerX.length; i++)
   {
      drawFlower(flowerX[i], flowerHeight[i], flowerRot[i], flowerColor[i], flowerScale[i]);
   }
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
  		strokeWeight(0.5);
  		push();
  			translate(0, -flowerHeight);
        scale(5, 7);
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
  		strokeWeight(0.5);
  		push();
  			translate(0, -flowerHeight);
        scale(5, 7);
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

  // draw right petal
  push();
    translate(0, -flowerHeight); // translate to top of stem
    scale(-1, 1);
    drawPetal();
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
	beginShape();
	vertex(234.45, -113.75);
	bezierVertex(234.45, -93.283, 227.117, -75.783, 212.45, -61.25);
	bezierVertex(197.917, -46.583, 180.333, -39.25, 159.7, -39.25);
	bezierVertex(139.2, -39.25, 121.617, -46.583, 106.95, -61.25);
	bezierVertex(92.417, -75.783, 85.15, -93.283, 85.15, -113.75);
	bezierVertex(85.15, -134.25, 92.417, -151.767, 106.95, -166.3);
	bezierVertex(121.617, -180.833, 139.2, -188.1, 159.7, -188.1);
	bezierVertex(180.333, -188.1, 197.917, -180.833, 212.45, -166.3);
	bezierVertex(227.117, -151.767, 234.45, -134.25, 234.45, -113.75);
	endShape();
	fill("#A72034");
	beginShape();
	vertex(226.15, -116.05);
	bezierVertex(226.15, -98.617, 219.85, -83.667, 207.25, -71.2);
	bezierVertex(194.917, -58.6, 179.967, -52.3, 162.4, -52.3);
	bezierVertex(144.8, -52.3, 129.767, -58.6, 117.3, -71.2);
	bezierVertex(104.867, -83.667, 98.65, -98.617, 98.65, -116.05);
	bezierVertex(98.65, -133.483, 104.867, -148.433, 117.3, -160.9);
	bezierVertex(129.767, -173.367, 144.8, -179.6, 162.4, -179.6);
	bezierVertex(179.967, -179.6, 194.917, -173.367, 207.25, -160.9);
	bezierVertex(219.85, -148.433, 226.15, -133.483, 226.15, -116.05);
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
}
