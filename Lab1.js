

function setup() {
	createCanvas(400, 405);
	py = 0;
	randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	for (i = 0; i < 20; i += 1) {
		randomNumbers[i] = random(0, 400);
	}
}


function draw() {
	faceX = width/2; // where the face is on the x-axis
	background(14, 199, 255);

	// background snow
	fill(255, 255, 255);
	rect(0, 340, 400, 60);

	// igloo
	ellipse(80, 300, 200, 200);


	push();
		translate(faceX - 135, 320);
		fill(0, 0, 0);
		rotate(-PI);
		arc(0, 0, 70, 100, 0, -PI);
	pop();




	// snow flakes
	fill(255, 255, 255);
	ellipse(randomNumbers[0], py - 20, 10, 10);
	ellipse(randomNumbers[1], py - 25, 10, 10);
	ellipse(randomNumbers[2], py - 31, 10, 10);
	ellipse(randomNumbers[3], py - 9, 10, 10);
	ellipse(randomNumbers[4], py - 11, 10, 10);
	ellipse(randomNumbers[5], py - 23, 10, 10);
	ellipse(randomNumbers[6], py - 29, 10, 10);
	ellipse(randomNumbers[7], py - 40, 10, 10);
	ellipse(randomNumbers[8], py - 61, 10, 10);
	ellipse(randomNumbers[9], py - 35, 10, 10);
	ellipse(randomNumbers[10], py, - 21, 10, 10);
	ellipse(randomNumbers[11], py - 28, 10, 10);
	ellipse(randomNumbers[12], py - 70, 10, 10);
	ellipse(randomNumbers[13], py - 65, 10, 10);
	ellipse(randomNumbers[14], py - 55, 10, 10);
	ellipse(randomNumbers[15], py - 19, 10, 10);
	ellipse(randomNumbers[16], py - 35, 10, 10);
	ellipse(randomNumbers[17], py - 80, 10, 10);
	ellipse(randomNumbers[18], py - 77, 10, 10);
	ellipse(randomNumbers[19], py - 38, 10, 10);
	py += 3;
	if (py >= height)
	{
		py = 0;
	}


	push();
		// left arm
		translate(faceX - 80, 210);
		rotate(PI/4);
		fill(0, 0, 0);
		ellipse(0, 0, 45, 160);


	pop();


	push();
		// right arm
		translate(faceX + 80, 210);
		fill(0, 0, 0);
		rotate(-PI/4);
		ellipse(0, 0, 45, 160);
	pop();


	push();
		translate(faceX - 60, 380);
		// left foot
		rotate(-6 *PI/5);
		fill(232, 126, 12);
		arc(0, 0, 60, 50, 0, -PI);
	pop();

	push();
		translate(faceX + 60, 380);
		// right foot
		rotate(6 *PI/5);
		fill(232, 126, 12);
		arc(0, 0, 60, 50, 0, -PI);
	pop();


	// body
	fill(0, 0, 0);
	ellipse(faceX, 265, 200, 220);
	fill(255, 255, 255);
	ellipse(faceX, 265, 180, 205);

	// face
	fill(0, 0, 0);
	ellipse(faceX, 100, 160, 160);
	fill(255, 255, 255);
	arc(faceX, 100, 140, 150, 0, -PI);
	noStroke();
	ellipse(faceX - 35, 100, 68, 65);
	ellipse(faceX + 35, 100, 68, 65);

	push();
		// eyes
		translate(faceX - 30, 100);
		fill(0, 0, 0);
		ellipse(0, 0, 20, 20);
		fill(255, 255, 255);
		ellipse(3, -3, 7, 7);
		fill(0, 0, 0);
		ellipse(60, 0, 20, 20);
		fill(255, 255, 255);
		ellipse(63, -3, 7, 7);

		// nose
		fill(232, 126, 12);
		triangle(15, 20, 30, 40, 45, 20);
	pop();


	push();
		// tuxedo tie
		translate(faceX - 40, 230);
		fill(0, 0, 0);
		rotate(-PI/2);
		triangle(15, 20, 30, 40, 45, 20);
	pop();

	push();
		translate(faceX + 35, 170);
		fill(0, 0, 0);
		rotate(PI/2);
		triangle(15, 20, 30, 40, 45, 20);
	pop();



















}
