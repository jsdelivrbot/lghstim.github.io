var xCenter;
var yCenter;
var animate = false;
var diameter;
var step;

var count;
var img;


function setup() {
	createCanvas(1000, 1000);

	// canvas center
	xCenter = width / 2;
	yCenter = height / 2;
	noStroke();
}



function draw() {
	background(255);
	//drawFlower(random(width), random(height));

	/* for (i = 0; i < 20; i++) {
		createStarShape(xCenter, yCenter);
	}

	noLoop(); */

	for (i = 0; i < 10; i++) {
		var randomSize = random(80, 300);
		createStarShape(xCenter, yCenter, randomSize);
	}

	noLoop();



	//createStarShape(xCenter, yCenter);



}

function mouseClicked() {
	// click on center
	selectedX = mouseX;
	selectedY = mouseY;
	for (i = 0; i < 10; i++) {
		var randomSize = random(80, 300);
		createStarShape(selectedX, selectedY, randomSize);
	}

}

function createStarShape(center_x, center_y, size) {
	var cx, cy, t;
	var angle = 0;

	// draw center of the flower
	fill(rand_color());
	ellipse(center_x, center_y, size);

	// pick petal color

	// draw each petal around flower
	t = 0;
	for(var i = 0; i < 13; i++) {
		t = t + .5;
		cx = center_x + 100*cos(t);
		cy = center_y + 100*sin(t);
		ellipse(cx, cy, size - 120, size - 100);
	}
}






/* function createStarShape(x, y) {
	//fill(158, 191, 160, 100);
	fill(rand_color());

	beginShape();
	translate(x - 500,y - 500);
	scale(random(1,1.1));
	vertex(203, 133);
	bezierVertex(203, 133, 203, 133, 203, 133);
	bezierVertex(203, 121, 203, 121, 203, 121);
	bezierVertex(204, 116, 204, 116, 204, 116);
	bezierVertex(207, 110, 207, 110, 207, 110);
	bezierVertex(210, 106, 210, 106, 210, 106);
	bezierVertex(215, 104, 215, 104, 215, 104);
	bezierVertex(219, 104, 219, 104, 219, 104);
	bezierVertex(222, 104, 222, 104, 222, 104);
	bezierVertex(224, 105, 224, 105, 224, 105);
	bezierVertex(225, 105, 225, 105, 225, 105);
	bezierVertex(225, 103, 225, 103, 225, 103);
	bezierVertex(227, 97, 227, 97, 227, 97);
	bezierVertex(230, 90, 230, 90, 230, 90);
	bezierVertex(233, 86, 233, 86, 233, 86);
	bezierVertex(235, 84, 235, 84, 235, 84);
	bezierVertex(239, 84, 239, 84, 239, 84);
	bezierVertex(241, 84, 241, 84, 241, 84);
	bezierVertex(244, 84, 244, 84, 244, 84);
	bezierVertex(247, 86, 247, 86, 247, 86);
	bezierVertex(249, 88, 249, 88, 249, 88);
	bezierVertex(251, 89, 251, 89, 251, 89);
	bezierVertex(252, 88, 252, 88, 252, 88);
	bezierVertex(253, 86, 253, 86, 253, 86);
	bezierVertex(257, 78, 257, 78, 257, 78);
	bezierVertex(260, 75, 260, 75, 260, 75);
	bezierVertex(263, 73, 263, 73, 263, 73);
	bezierVertex(264, 73, 264, 73, 264, 73);
	bezierVertex(266, 73, 266, 73, 266, 73);
	bezierVertex(268, 73, 268, 73, 268, 73);
	bezierVertex(270, 74, 270, 74, 270, 74);
	bezierVertex(272, 75, 272, 75, 272, 75);
	bezierVertex(274, 77, 274, 77, 274, 77);
	bezierVertex(276, 80, 276, 80, 276, 80);
	bezierVertex(278, 82, 278, 82, 278, 82);
	bezierVertex(280, 85, 280, 85, 280, 85);
	bezierVertex(282, 82, 282, 82, 282, 82);
	bezierVertex(287, 78, 287, 78, 287, 78);
	bezierVertex(291, 77, 291, 77, 291, 77);
	bezierVertex(295, 77, 295, 77, 295, 77);
	bezierVertex(298, 80, 298, 80, 298, 80);
	bezierVertex(301, 82, 301, 82, 301, 82);
	bezierVertex(303, 85, 303, 85, 303, 85);
	bezierVertex(304, 88, 304, 88, 304, 88);
	bezierVertex(306, 92, 306, 92, 306, 92);
	bezierVertex(307, 95, 307, 95, 307, 95);
	bezierVertex(308, 96, 308, 96, 308, 96);
	bezierVertex(312, 94, 312, 94, 312, 94);
	bezierVertex(318, 94, 318, 94, 318, 94);
	bezierVertex(321, 95, 321, 95, 321, 95);
	bezierVertex(324, 97, 324, 97, 324, 97);
	bezierVertex(325, 99, 325, 99, 325, 99);
	bezierVertex(327, 102, 327, 102, 327, 102);
	bezierVertex(329, 105, 329, 105, 329, 105);
	bezierVertex(329, 109, 329, 109, 329, 109);
	bezierVertex(330, 114, 330, 114, 330, 114);
	bezierVertex(330, 117, 330, 117, 330, 117);
	bezierVertex(331, 118, 331, 118, 331, 118);
	bezierVertex(331, 120, 331, 120, 331, 120);
	bezierVertex(333, 120, 333, 120, 333, 120);
	bezierVertex(335, 120, 335, 120, 335, 120);
	bezierVertex(338, 121, 338, 121, 338, 121);
	bezierVertex(341, 123, 341, 123, 341, 123);
	bezierVertex(344, 126, 344, 126, 344, 126);
	bezierVertex(346, 129, 346, 129, 346, 129);
	bezierVertex(348, 131, 348, 131, 348, 131);
	bezierVertex(349, 135, 349, 135, 349, 135);
	bezierVertex(350, 138, 350, 138, 350, 138);
	bezierVertex(350, 140, 350, 140, 350, 140);
	bezierVertex(350, 141, 350, 141, 350, 141);
	bezierVertex(350, 145, 350, 145, 350, 145);
	bezierVertex(349, 148, 349, 148, 349, 148);
	bezierVertex(349, 150, 349, 150, 349, 150);
	bezierVertex(349, 154, 349, 154, 349, 154);
	bezierVertex(352, 155, 352, 155, 352, 155);
	bezierVertex(355, 159, 355, 159, 355, 159);
	bezierVertex(357, 161, 357, 161, 357, 161);
	bezierVertex(359, 163, 359, 163, 359, 163);
	bezierVertex(360, 166, 360, 166, 360, 166);
	bezierVertex(362, 169, 362, 169, 362, 169);
	bezierVertex(362, 173, 362, 173, 362, 173);
	bezierVertex(363, 178, 363, 178, 363, 178);
	bezierVertex(362, 182, 362, 182, 362, 182);
	bezierVertex(360, 186, 360, 186, 360, 186);
	bezierVertex(360, 188, 360, 188, 360, 188);
	bezierVertex(359, 189, 359, 189, 359, 189);
	bezierVertex(359, 191, 359, 191, 359, 191);
	bezierVertex(358, 193, 358, 193, 358, 193);
	bezierVertex(360, 197, 360, 197, 360, 197);
	bezierVertex(363, 201, 363, 201, 363, 201);
	bezierVertex(366, 207, 366, 207, 366, 207);
	bezierVertex(367, 213, 367, 213, 367, 213);
	bezierVertex(367, 218, 367, 218, 367, 218);
	bezierVertex(366, 223, 366, 223, 366, 223);
	bezierVertex(364, 226, 364, 226, 364, 226);
	bezierVertex(363, 229, 363, 229, 363, 229);
	bezierVertex(361, 232, 361, 232, 361, 232);
	bezierVertex(359, 234, 359, 234, 359, 234);
	bezierVertex(359, 235, 359, 235, 359, 235);
	bezierVertex(357, 235, 357, 235, 357, 235);
	bezierVertex(358, 239, 358, 239, 358, 239);
	bezierVertex(360, 243, 360, 243, 360, 243);
	bezierVertex(362, 249, 362, 249, 362, 249);
	bezierVertex(362, 253, 362, 253, 362, 253);
	bezierVertex(362, 257, 362, 257, 362, 257);
	bezierVertex(360, 265, 360, 265, 360, 265);
	bezierVertex(358, 268, 358, 268, 358, 268);
	bezierVertex(356, 270, 356, 270, 356, 270);
	bezierVertex(354, 272, 354, 272, 354, 272);
	bezierVertex(351, 274, 351, 274, 351, 274);
	bezierVertex(347, 277, 347, 277, 347, 277);
	bezierVertex(348, 286, 348, 286, 348, 286);
	bezierVertex(349, 291, 349, 291, 349, 291);
	bezierVertex(348, 295, 348, 295, 348, 295);
	bezierVertex(347, 299, 347, 299, 347, 299);
	bezierVertex(346, 301, 346, 301, 346, 301);
	bezierVertex(345, 303, 345, 303, 345, 303);
	bezierVertex(343, 305, 343, 305, 343, 305);
	bezierVertex(340, 307, 340, 307, 340, 307);
	bezierVertex(338, 308, 338, 308, 338, 308);
	bezierVertex(337, 309, 337, 309, 337, 309);
	bezierVertex(335, 308, 335, 308, 335, 308);
	bezierVertex(330, 308, 330, 308, 330, 308);
	bezierVertex(329, 315, 329, 315, 329, 315);
	bezierVertex(328, 320, 328, 320, 328, 320);
	bezierVertex(327, 322, 327, 322, 327, 322);
	bezierVertex(326, 325, 326, 325, 326, 325);
	bezierVertex(323, 330, 323, 330, 323, 330);
	bezierVertex(321, 332, 321, 332, 321, 332);
	bezierVertex(319, 333, 319, 333, 319, 333);
	bezierVertex(317, 334, 317, 334, 317, 334);
	bezierVertex(314, 334, 314, 334, 314, 333);
	bezierVertex(311, 333, 311, 333, 311, 333);
	bezierVertex(307, 332, 307, 332, 307, 332);
	bezierVertex(305, 331, 305, 331, 305, 331);
	bezierVertex(304, 337, 304, 337, 304, 337);
	bezierVertex(302, 342, 302, 342, 302, 342);
	bezierVertex(299, 345, 299, 345, 299, 345);
	bezierVertex(297, 348, 297, 348, 297, 348);
	bezierVertex(293, 350, 293, 350, 293, 350);
	bezierVertex(289, 350, 289, 350, 289, 350);
	bezierVertex(285, 349, 285, 349, 285, 349);
	bezierVertex(283, 346, 283, 346, 283, 346);
	bezierVertex(280, 344, 280, 344, 280, 344);
	bezierVertex(277, 342, 277, 342, 277, 342);
	bezierVertex(275, 344, 275, 344, 275, 344);
	bezierVertex(274, 347, 274, 347, 274, 347);
	bezierVertex(272, 349, 272, 349, 272, 349);
	bezierVertex(269, 352, 269, 352, 269, 352);
	bezierVertex(266, 353, 266, 353, 266, 353);
	bezierVertex(262, 353, 262, 353, 262, 353);
	bezierVertex(258, 351, 258, 351, 258, 351);
	bezierVertex(255, 349, 255, 349, 255, 349);
	bezierVertex(252, 344, 252, 344, 252, 344);
	bezierVertex(249, 339, 249, 339, 249, 339);
	bezierVertex(245, 341, 245, 341, 245, 341);
	bezierVertex(242, 343, 242, 343, 242, 343);
	bezierVertex(239, 343, 239, 343, 239, 343);
	bezierVertex(237, 343, 237, 343, 237, 343);
	bezierVertex(234, 343, 234, 343, 234, 343);
	bezierVertex(231, 342, 231, 342, 231, 342);
	bezierVertex(229, 340, 229, 340, 229, 340);
	bezierVertex(227, 337, 227, 337, 227, 337);
	bezierVertex(225, 333, 225, 333, 225, 333);
	bezierVertex(223, 323, 223, 323, 223, 323);
	bezierVertex(223, 319, 223, 319, 223, 319);
	bezierVertex(219, 320, 219, 320, 219, 320);
	bezierVertex(214, 320, 214, 320, 214, 320);
	bezierVertex(210, 319, 210, 319, 210, 319);
	bezierVertex(207, 316, 207, 316, 207, 316);
	bezierVertex(204, 312, 204, 312, 204, 312);
	bezierVertex(202, 306, 202, 306, 202, 306);
	bezierVertex(202, 302, 202, 302, 202, 302);
	bezierVertex(202, 291, 202, 291, 202, 291);
	bezierVertex(200, 291, 200, 291, 200, 291);
	bezierVertex(197, 289, 197, 289, 197, 289);
	bezierVertex(193, 288, 193, 288, 193, 288);
	bezierVertex(191, 285, 191, 285, 191, 285);
	bezierVertex(188, 282, 188, 282, 188, 282);
	bezierVertex(187, 278, 187, 278, 187, 278);
	bezierVertex(186, 274, 186, 274, 186, 274);
	bezierVertex(186, 265, 186, 265, 186, 265);
	bezierVertex(189, 254, 189, 254, 189, 254);
	bezierVertex(188, 253, 188, 253, 188, 253);
	bezierVertex(185, 250, 185, 250, 185, 250);
	bezierVertex(183, 248, 183, 248, 183, 248);
	bezierVertex(181, 245, 181, 245, 181, 245);
	bezierVertex(180, 242, 180, 242, 180, 242);
	bezierVertex(179, 239, 179, 239, 179, 239);
	bezierVertex(177, 235, 177, 235, 177, 235);
	bezierVertex(177, 228, 177, 228, 177, 228);
	bezierVertex(180, 220, 180, 220, 180, 220);
	bezierVertex(183, 216, 183, 216, 183, 216);
	bezierVertex(185, 213, 185, 213, 185, 213);
	bezierVertex(182, 207, 182, 207, 182, 207);
	bezierVertex(180, 203, 180, 203, 180, 203);
	bezierVertex(179, 199, 179, 199, 179, 199);
	bezierVertex(177, 192, 177, 192, 177, 192);
	bezierVertex(177, 189, 177, 189, 177, 189);
	bezierVertex(179, 182, 179, 182, 179, 182);
	bezierVertex(187, 169, 187, 169, 187, 169);
	bezierVertex(188, 164, 188, 164, 188, 164);
	bezierVertex(187, 162, 187, 162, 187, 162);
	bezierVertex(187, 157, 187, 157, 187, 157);
	bezierVertex(186, 151, 186, 151, 186, 151);
	bezierVertex(188, 146, 188, 146, 188, 146);
	bezierVertex(191, 141, 191, 141, 191, 141);
	bezierVertex(195, 135, 195, 135, 195, 135);
	bezierVertex(196, 135, 196, 135, 196, 135);
	bezierVertex(194, 136, 194, 136, 194, 136);
	endShape(CLOSE);
} */

function rand_color() {
	return color(random(255), random(255), random(255), random(50, 100));
}
