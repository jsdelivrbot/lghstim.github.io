 var img;

 function setup() {
	createCanvas(564, 485);
	img = loadImage("background.png");

}

function draw() {
	var xSkyscraper, wSkyscraper, hSkyscraper, xHouse, wHouse, hHouse;
	background(0);

	xSkyscraper = 0;
	xHouse = 0;

	fill(255);
	// create star background
	createStar(232, 223);
	createStar(280, 320);
	createStar(245, 183);
	createStar(295, 443);
	createStar(479, 399);
	createStar(315, 403);
	createStar(370, 433);
	createStar(500, 440);
	createStar(470, 300);
	createStar(500, 600);
	createStar(500, 440);
	createStar(500, 500);
	createStar(400, 550);
	createStar(500, 440);
	createStar(550, 700);
	createStar(700, 300);
	createStar(700, 400);
	createStar(750, 800);
	createStar(630, 780);
	createStar(700, 800);
	createStar(700, 750);
	createStar(650, 470);
	createStar(350, 600);
	createStar(750, 800);
	createMoon(300, 200);


	while (xSkyscraper < 564) {
		hSkyscraper = random(100, 300);
		wSkyscraper = random(40, 60);

		

		drawSkyscraper(color(random(255), random(255), random(255)), 
			color(random(255), random(255), random(255)), xSkyscraper, 400-hSkyscraper, wSkyscraper, hSkyscraper);
		xSkyscraper += wSkyscraper;

		hHouse = random(50, 70);
		wHouse = random(65, 99);
		drawHouse(color(random(255), random(255), random(255)), 
			color(random(255), random(255), random(255)), xHouse, 500-hHouse, wHouse, hHouse);
		xHouse += wHouse;


	}


	noLoop();

}

function createMoon(x,y) {
	push();
		translate(x + 60, y - 200);
		scale(0.3);
		fill(252,252,228);
		beginShape();
		vertex(365, 377);
		bezierVertex(365, 377, 365, 377, 365, 377);
		bezierVertex(341, 384, 341, 384, 341, 384);
		bezierVertex(318, 389, 318, 389, 318, 389);
		bezierVertex(304, 391, 304, 391, 304, 391);
		bezierVertex(288, 392, 288, 392, 288, 392);
		bezierVertex(273, 392, 273, 392, 273, 392);
		bezierVertex(257, 394, 257, 394, 257, 394);
		bezierVertex(247, 394, 247, 394, 247, 394);
		bezierVertex(232, 392, 232, 392, 232, 392);
		bezierVertex(216, 389, 216, 389, 216, 389);
		bezierVertex(203, 388, 203, 388, 203, 388);
		bezierVertex(188, 384, 188, 384, 188, 384);
		bezierVertex(172, 380, 172, 380, 172, 380);
		bezierVertex(155, 373, 155, 373, 155, 373);
		bezierVertex(144, 369, 144, 369, 144, 369);
		bezierVertex(129, 363, 129, 363, 129, 363);
		bezierVertex(111, 353, 111, 353, 111, 353);
		bezierVertex(96, 341, 96, 341, 96, 341);
		bezierVertex(76, 328, 76, 328, 76, 328);
		bezierVertex(65, 314, 65, 314, 65, 314);
		bezierVertex(53, 302, 53, 302, 53, 302);
		bezierVertex(44, 288, 44, 288, 44, 288);
		bezierVertex(44, 288, 44, 288, 44, 288);
		bezierVertex(28, 259, 28, 259, 28, 259);
		bezierVertex(20, 235, 20, 235, 20, 235);
		bezierVertex(17, 189, 17, 189, 17, 189);
		bezierVertex(24, 159, 24, 159, 24, 159);
		bezierVertex(38, 126, 38, 126, 38, 126);
		bezierVertex(52, 100, 52, 100, 52, 100);
		bezierVertex(72, 80, 72, 80, 72, 80);
		bezierVertex(93, 62, 93, 62, 93, 62);
		bezierVertex(120, 44, 120, 44, 120, 44);
		bezierVertex(156, 28, 156, 28, 156, 28);
		bezierVertex(186, 17, 186, 17, 186, 17);
		bezierVertex(224, 9, 224, 9, 224, 9);
		bezierVertex(256, 8, 256, 8, 256, 8);
		bezierVertex(287, 9, 287, 9, 287, 9);
		bezierVertex(320, 15, 320, 15, 320, 15);
		bezierVertex(349, 21, 349, 21, 349, 21);
		bezierVertex(368, 25, 368, 25, 368, 25);
		bezierVertex(374, 28, 374, 28, 374, 28);
		bezierVertex(356, 35, 356, 35, 356, 35);
		bezierVertex(344, 40, 344, 40, 344, 40);
		bezierVertex(335, 44, 335, 44, 335, 44);
		bezierVertex(328, 48, 328, 48, 328, 48);
		bezierVertex(320, 52, 320, 52, 320, 52);
		bezierVertex(310, 58, 310, 58, 310, 58);
		bezierVertex(302, 64, 302, 64, 302, 64);
		bezierVertex(293, 72, 293, 72, 293, 72);
		bezierVertex(284, 82, 284, 82, 284, 82);
		bezierVertex(275, 90, 275, 90, 275, 90);
		bezierVertex(262, 105, 262, 105, 262, 105);
		bezierVertex(255, 116, 255, 116, 255, 116);
		bezierVertex(246, 129, 246, 129, 246, 129);
		bezierVertex(236, 146, 236, 146, 236, 146);
		bezierVertex(232, 166, 232, 166, 232, 166);
		bezierVertex(227, 187, 227, 187, 227, 187);
		bezierVertex(228, 208, 228, 208, 228, 208);
		bezierVertex(231, 226, 231, 226, 231, 226);
		bezierVertex(231, 238, 231, 238, 231, 238);
		bezierVertex(237, 255, 237, 255, 237, 255);
		bezierVertex(242, 272, 242, 272, 242, 272);
		bezierVertex(251, 287, 251, 287, 251, 287);
		bezierVertex(260, 300, 260, 300, 260, 300);
		bezierVertex(268, 312, 268, 312, 268, 312);
		bezierVertex(288, 329, 288, 329, 288, 329);
		bezierVertex(300, 340, 300, 340, 300, 340);
		bezierVertex(323, 356, 323, 356, 323, 356);
		endShape(CLOSE);
	pop();
}

function createStar(x, y) {
	push();
		translate(x - 100, y - 225);
		scale(0.04);
		beginShape();
		vertex(199, 398);
		bezierVertex(199, 398, 199, 398, 199, 398);
		bezierVertex(194, 380, 194, 380, 194, 380);
		bezierVertex(192, 361, 192, 361, 192, 361);
		bezierVertex(189, 348, 189, 348, 189, 348);
		bezierVertex(185, 327, 185, 327, 185, 327);
		bezierVertex(183, 314, 183, 314, 183, 314);
		bezierVertex(179, 293, 179, 293, 179, 293);
		bezierVertex(174, 268, 174, 268, 174, 268);
		bezierVertex(170, 244, 170, 244, 170, 244);
		bezierVertex(169, 236, 169, 236, 169, 236);
		bezierVertex(158, 240, 158, 240, 158, 240);
		bezierVertex(147, 243, 147, 243, 147, 243);
		bezierVertex(134, 248, 134, 248, 134, 248);
		bezierVertex(122, 251, 122, 251, 122, 251);
		bezierVertex(113, 254, 113, 254, 113, 253);
		bezierVertex(106, 256, 106, 256, 106, 256);
		bezierVertex(101, 258, 101, 258, 101, 258);
		bezierVertex(96, 258, 96, 258, 96, 258);
		bezierVertex(94, 258, 94, 258, 94, 258);
		bezierVertex(98, 254, 98, 254, 98, 254);
		bezierVertex(104, 247, 104, 247, 104, 247);
		bezierVertex(112, 239, 112, 239, 112, 239);
		bezierVertex(118, 234, 118, 234, 118, 234);
		bezierVertex(122, 231, 122, 231, 122, 231);
		bezierVertex(129, 226, 129, 226, 129, 226);
		bezierVertex(136, 219, 136, 219, 136, 219);
		bezierVertex(141, 215, 141, 215, 141, 215);
		bezierVertex(142, 215, 142, 215, 142, 215);
		bezierVertex(144, 214, 144, 214, 144, 214);
		bezierVertex(136, 214, 136, 214, 136, 214);
		bezierVertex(121, 212, 121, 212, 121, 212);
		bezierVertex(108, 209, 108, 209, 108, 209);
		bezierVertex(97, 207, 97, 207, 97, 207);
		bezierVertex(81, 205, 81, 205, 81, 205);
		bezierVertex(66, 202, 66, 202, 66, 202);
		bezierVertex(54, 200, 54, 200, 54, 200);
		bezierVertex(38, 198, 38, 198, 38, 198);
		bezierVertex(22, 194, 22, 194, 22, 194);
		bezierVertex(9, 191, 9, 191, 9, 191);
		bezierVertex(0, 190, 0, 190, 0, 190);
		bezierVertex(1, 189, 1, 189, 1, 189);
		bezierVertex(20, 187, 20, 187, 20, 187);
		bezierVertex(45, 184, 45, 184, 45, 184);
		bezierVertex(68, 181, 68, 181, 68, 181);
		bezierVertex(85, 181, 85, 181, 85, 181);
		bezierVertex(107, 180, 107, 180, 107, 180);
		bezierVertex(128, 179, 128, 179, 128, 179);
		bezierVertex(139, 176, 139, 176, 139, 176);
		bezierVertex(133, 167, 133, 167, 133, 167);
		bezierVertex(125, 151, 125, 151, 125, 151);
		bezierVertex(120, 138, 120, 138, 120, 138);
		bezierVertex(116, 130, 116, 130, 116, 130);
		bezierVertex(112, 120, 112, 120, 112, 120);
		bezierVertex(112, 118, 112, 118, 112, 118);
		bezierVertex(124, 123, 124, 123, 123, 123);
		bezierVertex(136, 132, 136, 132, 136, 132);
		bezierVertex(153, 148, 153, 148, 153, 148);
		bezierVertex(164, 155, 164, 155, 164, 155);
		bezierVertex(172, 163, 172, 163, 172, 163);
		bezierVertex(174, 151, 174, 151, 174, 151);
		bezierVertex(174, 128, 174, 128, 174, 128);
		bezierVertex(179, 109, 179, 109, 179, 109);
		bezierVertex(184, 75, 184, 75, 184, 75);
		bezierVertex(189, 52, 189, 52, 189, 52);
		bezierVertex(192, 32, 192, 32, 192, 32);
		bezierVertex(195, 21, 195, 21, 195, 21);
		bezierVertex(198, 11, 198, 11, 198, 11);
		bezierVertex(202, 0, 202, 0, 202, 0);
		bezierVertex(205, 13, 205, 13, 205, 13);
		bezierVertex(209, 39, 209, 39, 209, 39);
		bezierVertex(215, 68, 215, 68, 215, 68);
		bezierVertex(218, 96, 218, 96, 218, 96);
		bezierVertex(222, 121, 222, 121, 222, 121);
		bezierVertex(229, 161, 229, 161, 229, 161);
		bezierVertex(238, 156, 238, 156, 238, 156);
		bezierVertex(249, 145, 249, 145, 249, 145);
		bezierVertex(264, 136, 264, 136, 264, 136);
		bezierVertex(274, 127, 274, 127, 274, 127);
		bezierVertex(288, 119, 288, 119, 288, 119);
		bezierVertex(278, 142, 278, 142, 278, 142);
		bezierVertex(273, 152, 273, 152, 273, 152);
		bezierVertex(265, 166, 265, 166, 265, 166);
		bezierVertex(261, 178, 261, 178, 261, 178);
		bezierVertex(271, 179, 271, 179, 271, 179);
		bezierVertex(296, 180, 296, 180, 296, 180);
		bezierVertex(320, 180, 320, 180, 320, 180);
		bezierVertex(349, 183, 349, 183, 349, 183);
		bezierVertex(370, 184, 370, 184, 370, 184);
		bezierVertex(385, 186, 385, 186, 385, 186);
		bezierVertex(397, 188, 397, 188, 397, 188);
		bezierVertex(399, 189, 399, 189, 399, 189);
		bezierVertex(368, 196, 368, 196, 368, 196);
		bezierVertex(348, 198, 348, 198, 348, 198);
		bezierVertex(333, 202, 333, 202, 333, 202);
		bezierVertex(323, 205, 323, 205, 323, 205);
		bezierVertex(317, 206, 317, 206, 317, 206);
		bezierVertex(306, 206, 306, 206, 306, 206);
		bezierVertex(293, 209, 293, 209, 293, 209);
		bezierVertex(284, 210, 284, 210, 284, 210);
		bezierVertex(275, 211, 275, 211, 275, 211);
		bezierVertex(267, 212, 267, 212, 267, 212);
		bezierVertex(260, 212, 260, 212, 260, 212);
		bezierVertex(270, 227, 270, 227, 270, 227);
		bezierVertex(280, 233, 280, 233, 280, 233);
		bezierVertex(292, 245, 292, 245, 292, 245);
		bezierVertex(305, 256, 305, 256, 305, 256);
		bezierVertex(280, 251, 280, 251, 280, 251);
		bezierVertex(264, 244, 264, 244, 264, 244);
		bezierVertex(251, 243, 251, 243, 251, 243);
		bezierVertex(245, 239, 245, 239, 245, 239);
		bezierVertex(238, 236, 238, 236, 238, 236);
		bezierVertex(229, 232, 229, 232, 229, 232);
		endShape(CLOSE);
	pop();
}


function drawHouse(fillColor, strokeColor, xBuilding, yBuilding, wBuilding, hBuilding) {
	fill(fillColor, 100);
	stroke(strokeColor);
	rect(xBuilding, yBuilding, wBuilding, hBuilding);
	triangle(xBuilding, yBuilding, xBuilding + (wBuilding/2), height - hBuilding - 10, xBuilding + wBuilding, height - hBuilding + 15);
	fill(strokeColor, 150);
}

function drawSkyscraper(fillColor, strokeColor, xBuilding, yBuilding, wBuilding, hBuilding) {
	fill(fillColor, 100);
	stroke(strokeColor);
	rect(xBuilding, yBuilding, wBuilding, hBuilding);
	fill(strokeColor, 150);
	drawWindows(xBuilding, yBuilding, wBuilding, hBuilding);
} 

function drawWindows(xBuilding, yBuilding, wBuilding, hBuilding) {
	stroke(0);
	fill(255);
	var xWindow = xBuilding; // start a little off to the right
	var yWindow = yBuilding + 5; // start a little below top

	while (yWindow < (hBuilding + yBuilding - 20)) {
		xWindow = xWindow + 10;
		rect(xWindow, yWindow, 5, 7); // draw window itself

		if (xWindow > (xBuilding + wBuilding - 20)) {
			xWindow = xBuilding; // start a little off to the right
			yWindow = yWindow + 12; // keep moving down a row
		}

	}


}

/* function setup () {
	createCanvas(1000, 1000);
}


function drawWindow(x, y, col)
{
   stroke(0);
   fill(col);
   rect(x, y, 5, 7);
}

function draw() 
{
   var windowX; 
   var windowY;

   background(0,200,255);
   noStroke();

   fill(0, 200, 0);
   rect(0, 3*height/4, width, height/4);

   fill(255, 0, 0);
   rect(200, 100, 100, 250);

   windowX = 205;
   windowY = 105;
   while (windowY < 340)
   {
      drawWindow(windowX, windowY, color(random(125, 200)));
      windowX += 10;

      if (windowX > 290)
      {
         windowX = 205;
         windowY += 12;
      }
   }
} */
