/*
Created by Sarthak Khillon and Tim Gorer for CPE 123 Project 1
Due Friday, October 7, 2016 before midnight

Note from Sarthak: Sometimes I forgot to use semicolons (sorry...) so there's a smattering of code with and without semicolons.
				it still works though!
*/

var bg;
var draw_speech_bubble;
var speechBubbleX;
var speechBubbleY;
var manCenterX;
var manCenterY;
var tearDropCenterX;
var tearDropCenterY;
var tearDropStartY;
var sleepStartX;
var sleepStartY;
var sleepDefaultX;
var sleepDefaultY;
var rainX = [];
var rainY = [];
var numDrops = 300;

var counter = 0;
var seconds = 0;

function setup() {
	createCanvas(1500, 1800);
	draw_speech_bubble = false;
	manCenterX = 200;
	manCenterY = -115;
	tearDropCenterX = 18700;
	tearDropCenterY = 19000;
	tearDropStartY = tearDropCenterY;

	sleepStartY = 500
	sleepStartY = 600

	sleepDefaultX = sleepStartX
	sleepDefaultY = sleepStartY


	for (var i=0; i<numDrops; i++)
	{
		rainX.push(random(-2000, 1000));
		rainY.push(random(-1000,0));
	}

}

function draw() {

	background(255, 255, 255);
	fill(138, 200, 177);
	rect(0, height - 20, width, 10); // grass
	fill(175)
	rect(0, 0, width, height - 20) // gray, melancholy background
	setText(200, 1500, "PAY ATTENTION IN CLASS!", 50)
	setText(200, 1550, "(or end up like Louis with his sad baguette/paper carry-er)", 25)
	setText(sleepStartY, sleepStartY, "zzz", 100)
	drawFrenchman(manCenterX, manCenterY);
	drawTearDrop(tearDropCenterX,tearDropCenterY);
	tearDropCenterY = tearDropCenterY + 25;
	tearDropCenterX = tearDropCenterX;
	sleepStartX += 1
	sleepStartY -= 1

	if (tearDropCenterY > 19500) {
		tearDropCenterY = tearDropStartY
	}

	if (sleepStartX > 550 || sleepStartY < 450) {
		sleepStartX = sleepDefaultX
		sleepStartY = sleepDefaultY
	}
	//manCenterX = manCenterX + 0.25;

	push()
	strokeWeight(3);

    for (var i=0; i<numDrops; i++)
	{
		stroke(41, 171, 226);
		line(rainX[i], rainY[i], rainX[i] + 20, rainY[i] + 20);
		rainX[i] += 5;
		rainY[i] += 6;

		if (rainX[i] > width || rainY[i] > height) {
			rainX[i] = (random(-2000, 1000));
			rainY[i] = (random(-200,0));
		}
	}
	pop()

	drawSpeechBubble(manCenterX, manCenterY);
	drawPastSituation(0.6)
	//setText(500, 1500, "Stay in school", 20)

	counter++
	seconds = counter/60
}

function setText(x, y, message, txtSize) {
	fill(0)
	textSize(txtSize)
	textFont("Avenir")
	text(message, x, y)	
}

function drawPastSituation(shrinkFactor) {
	//setText(quadrant[0], quadrant[1])
	push()
		translate(350, 200)
		create(shrinkFactor)
		createHead(shrinkFactor)
	pop()
}

function create(shrinkFactor) {
	// creates everything except the head, which is done separately
	noStroke()

push()
	scale(shrinkFactor)

	// table legs
	push()
		stroke(34, 139, 34)
		strokeWeight(5)
		strokeCap(SQUARE)
		var xBase = 100
		line(xBase, height/2 - 50, xBase, height/2 - 125)
		line(xBase + 25, height/2 - 75, xBase + 25, height/2 - 125)
		line(xBase + 60, height/2 - 80, xBase + 60, height/2 - 125)
		line(xBase + 155, height/2 - 80, xBase + 155, height/2 - 125)
		line(xBase + 175, height/2 - 75, xBase + 175, height/2 - 125)
		line(xBase + 200, height/2 - 50, xBase + 200, height/2 - 125)
	pop()

	// table
	fill(207, 162, 13)
	quad(125, 700, 275, 700, 320, 760, 80, 760) 
	

	// paper quad
	fill(255)
	quad(170, height/2 - 185, 230, height/2 - 185, 240, height/2 - 150, 160, height/2 - 150)

	// bottom half of table
	fill(207, 162, 13)
	rect(90, 760, 220, 15) 
	
	createBody() // includes pen
pop()
}

function createBody() {

	// shirt torso is quad with a trangle above the left side
	fill(108, 180, 249)
	quad(150, height/4 + 150, 260, height/4 + 150, 225, height/2 - 200, 185, height/2 - 200)
	//triangle(150, height/4, 195, height/4, 195, height/4-20)

	// neck is upside down arc
	push()
		translate(0, 170)
		fill(236, 93, 63)
		arc(208, height/4, 25, 50, 0, PI)
		rect(195, height/4 - 20, 25, 25)
	pop()

	// arm sleeves are going to be a rectangle
	push()
		fill(108, 180, 249)
		translate(165, height/4 + 150)
		rotate(radians(45))
		
		push()
			fill(236, 93, 63)
			rect(0, 0, 25, 75)
		pop()
		
		rect(0, 0, 25, 50) // left upper arm
		
	pop()

	push() 
		translate(225, height/4 + 170)
		rotate(radians(-45))

		push()
			fill(236, 93, 63)
			rect(0, 0, 25, 75)
		pop()

		rect(0, 0, 25, 50) // right upper arm

		// left lower arm
	pop()

	//right lower arm
	push()
		translate(315, height/4 + 85)
		rotate(radians(120))
		fill(236, 93, 63)
		rect(113, -45, 20, 80)
	pop()

	// pen rectangle
	push()
		translate(190, height/2 - 210)
		rotate(radians(60))
		fill(117, 93, 138)
		rect(-50, 0, 70, 2)
	pop()

	// left lower arm
	push()
		translate(115, height/4 + 200)
		rotate(radians(-45))
		fill(236, 93, 63)
		rect(0, 0, 25, 75)
	pop()

	// thumb
	push()
		fill(236, 93, 63)
		translate(245, height/4 + 160)
		rotate(PI/3)
		rect(25, 75, 10, 20)
	pop()

	// hand
	fill(236, 93, 63)
	rect(165, height/4 + 235, 40, 20)

}

function createHead(scaleFactor) {
	scale(scaleFactor)
	push()
		translate(-150, 165)
		fill(236, 93, 63)
		// head
		ellipse(width/4 - 5, height/4 - 20, 60, 60)
		
		// nose
		//triangle(185, 225, 193, 230, 185, 245)
		fill(0)
	pop()

	

	push()
		translate(12, 340)
		// hair is going to be a purple arc
		fill(117, 93, 138)
		arc(208, 255, 60, 60, PI+PI/3, 0, OPEN)
	pop()
}

// x - x coordinate of man center
// y - y coordinate of man center
function drawFrenchman(x, y)
{
	scale(1.25);
	//noStroke();
	push();
		translate(x, y + 920); 	  	

		// head & nose
		fill(97, 155, 215);
		triangle(673, 162, 742, 183, 736, 190);
		fill(246, 74, 57);
		beginShape();
		vertex(672, 161);
		vertex(674, 128);
		vertex(686, 106);
		vertex(706, 94);
		vertex(727, 94);
		vertex(747, 102);
		vertex(759, 118);
		vertex(763, 141);
		vertex(757, 160);
		vertex(761, 168);
		vertex(765, 175);
		vertex(766, 175);
		vertex(765, 177);
		vertex(764, 179);
		vertex(766, 179);
		vertex(762, 181);
		vertex(753, 177);
		vertex(748, 174);
		vertex(744, 176);
		vertex(740, 184);
		vertex(672, 161);
		endShape(CLOSE);
	pop();

	push();
		// pants
		translate(x, y + 900);
		fill(50, 71, 75);
		beginShape();
		vertex(522, 460);
		vertex(537, 470);
		vertex(545, 476);
		vertex(554, 481);
		vertex(572, 490);
		vertex(593, 497);
		vertex(605, 501);
		vertex(624, 506);
		vertex(645, 508);
		vertex(677, 508);
		vertex(687, 507);
		vertex(693, 507);
		vertex(698, 508);
		vertex(704, 509);
		vertex(712, 510);
		vertex(719, 510);
		vertex(723, 511);
		vertex(730, 509);
		vertex(736, 508);
		vertex(742, 506);
		vertex(746, 504);
		vertex(747, 504);
		vertex(750, 502);
		vertex(753, 501);
		vertex(756, 500);
		vertex(763, 513);
		vertex(774, 532);
		vertex(779, 545);
		vertex(782, 561);
		vertex(782, 573);
		vertex(782, 577);
		vertex(783, 581);
		vertex(785, 588);
		vertex(794, 613);
		vertex(798, 628);
		vertex(799, 640);
		vertex(801, 662);
		vertex(802, 679);
		vertex(802, 691);
		vertex(803, 714);
		vertex(803, 728);
		vertex(803, 731);
		vertex(805, 737);
		vertex(800, 743);
		vertex(795, 746);
		vertex(760, 756);
		vertex(731, 758);
		vertex(716, 758);
		vertex(705, 756);
		vertex(702, 752);
		vertex(697, 702);
		vertex(695, 690);
		vertex(687, 682);
		vertex(687, 671);
		vertex(683, 664);
		vertex(681, 656);
		vertex(676, 648);
		vertex(670, 639);
		vertex(668, 631);
		vertex(662, 622);
		vertex(652, 611);
		vertex(646, 603);
		vertex(629, 592);
		vertex(625, 598);
		vertex(623, 608);
		vertex(616, 621);
		vertex(605, 642);
		vertex(588, 673);
		vertex(577, 683);
		vertex(565, 696);
		vertex(559, 707);
		vertex(545, 729);
		vertex(537, 741);
		vertex(531, 741);
		vertex(488, 712);
		vertex(451, 668);
		vertex(445, 655);
		vertex(480, 618);
		vertex(493, 597);
		vertex(499, 582);
		vertex(502, 567);
		vertex(509, 559);
		vertex(512, 542);
		vertex(516, 494);
		vertex(522, 460);
		endShape(CLOSE);
	pop();

	

	// baguette second part
	push();
		noStroke();
		fill(239, 175, 72);
		translate(x + 525, y + 1300);
		rotate(-PI/2 + PI/20);
		arc(-15, 218, 35, 160, 0, -PI);
	pop();


	// coat
	push();
		translate(x, y + 910);
		fill(97, 155, 215);
		//noStroke();
		beginShape();
		vertex(522, 460);
		vertex(525, 417);
		vertex(527, 403);
		vertex(534, 368);
		vertex(541, 340);
		vertex(547, 319);
		vertex(569, 269);
		vertex(605, 210);
		vertex(620, 192);
		vertex(661, 157);
		vertex(700, 174);
		vertex(727, 185);
		vertex(736, 189);
		vertex(738, 210);
		vertex(753, 222);
		vertex(763, 235);
		vertex(767, 246);
		vertex(769, 249);
		vertex(770, 259);
		vertex(770, 270);
		vertex(768, 282);
		vertex(766, 297);
		vertex(764, 307);
		vertex(756, 333);
		vertex(755, 349);
		vertex(754, 357);
		vertex(747, 368);
		vertex(751, 382);
		vertex(752, 390);
		vertex(746, 407);
		vertex(751, 420);
		vertex(752, 428);
		vertex(747, 440);
		vertex(752, 451);
		vertex(753, 470);
		vertex(758, 495);
		vertex(722, 511);
		vertex(635, 508);
		vertex(576, 490);
		vertex(522, 460);
		endShape(CLOSE);
	pop();


	// beret
	push();
		translate(x + 500, y + 350 + 800);
		fill(55, 67, 75);
		//noStroke();
		rotate(-PI/10);
		ellipse(60 + 185, -50, 107, 48);
		rotate(PI - PI/80);
		arc(-242, 61.75, 53.5, 10, 0, -PI);
	pop();


	// baguette first part
	push();
		noStroke();
		fill(239, 175, 72);
		translate(x + 540, y + 1300);
		quad(-3, 16, 5, -15, 128, 16, 130, 50);
		rotate(PI/10);
		ellipse(0, 0, 50, 31);
	pop(); 


	// newspaper
	push();
		noStroke();
		translate(x + 8,y + 914);
		fill(255, 255, 255);
		quad(577, 382, 594, 335, 667, 364, 661, 403);
		fill(0, 0, 0);
		stroke(4);
		line(599, 386, 610, 350);
		line(605, 386, 616, 350);
		line(610, 386, 621, 350);
		//noStroke();
	pop();

	push();
		translate(x + 720, y + 1060);
		// cigarette
		fill(168, 168, 168);
		rotate(PI/4);
		rect(50, 3, 30, 8);
		fill(216, 99, 2);
		rect(80, 3, 6, 8);
	pop();


	push();
		// moustache
		fill(0, 0, 0);
		translate(x + 717, y + 1060);
		ellipse(29, 37, 11, 11); 
	pop(); 

}



// x - x coordinate of man center
// y - y coordinate of man center
function drawSpeechBubble(x, y) {
	push();
		translate(x - 125 + 500, y + 30 + 800);
		stroke(0,0,0);
		strokeWeight(10);
		fill(255, 255, 255, .9);
		ellipse(280, 160, 58, 26);
		ellipse(240, 110, 86, 48);
		ellipse(200, 50, 114, 58);
		ellipse(-100, -200, 600, 500);
	pop();


}

// x - x coordinate of man center
// y - y coordinate of man center
function drawTearDrop(x, y) {
	push();
		scale(0.05);
		translate(x,y);
		fill(41, 171, 226);
		beginShape();
		vertex(272, 1);
		vertex(269, 24);
		vertex(264, 58);
		vertex(264, 86);
		vertex(272, 146);
		vertex(295, 191);
		vertex(326, 223);
		vertex(393, 275);
		vertex(425, 328);
		vertex(441, 392);
		vertex(444, 428);
		vertex(441, 466);
		vertex(420, 537);
		vertex(383, 584);
		vertex(290, 634);
		vertex(237, 639);
		vertex(161, 630);
		vertex(75, 596);
		vertex(22, 543);
		vertex(3, 486);
		vertex(1, 443);
		vertex(13, 378);
		vertex(53, 288);
		vertex(137, 168);
		vertex(224, 58);
		vertex(272, 1);
		endShape(CLOSE);

		if (y > 40000) {
			tearDropCenterY = 19000;
			tearDropCenterX = 18300;
		}
	pop();	
}


function mouseClicked() {
	draw_speech_bubble = true;
	manCenterX = 200;
	manCenterY = -115;
	//drawSpeechBubble(manCenterX, manCenterY); 
}