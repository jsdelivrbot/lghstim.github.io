
var dots = [];
var rotZ = 0;
var rotX = 0;
var c = 0;
var counter = 0;
var max_theta = 0;
var generateNewShapes = false;
var scaleFactor;


function setup(){
	createCanvas(600, 600, WEBGL);
	scaleFactor = 1;
}
function draw(){
	background(0, 0, 255);

	fill(255);
	draw3DRose();

	
	if (generateNewShapes == true) {
		draw3DStar(); 
		draw3DStar2();
		draw3DStar3();
	}




	push();
	strokeWeight(0);
		if(keyIsDown(RIGHT_ARROW)){
			rotZ += PI/ 30;
		}else if(keyIsDown(LEFT_ARROW)){
			rotZ -= PI/30;
		}else rotZ += PI/60;
	pop();

	for(var i = 0; i < dots.length; i++)
	{
		push();
		rotateX(-rotX);
		rotateY(-rotZ);
		translate(scaleFactor * dots[i].x*40, scaleFactor * dots[i].y*40, dots[i].z);
		sphere(5);
		pop();
	}

	dots = [];
	
	
} 


function draw3DRose() {
	fill(0,255,255);
	for(var t = 0; t < max_theta; t+=2*PI/300){
	    var x = 1/2 * cos(4 * t) * cos(t);
	    var y = 1/2* cos(4 * t) * sin(t);
	    var z = 1/2* cos(4 * t) * sin(t);
		dots.push({x: x, y: y, z: z});
	}
	max_theta += 2*PI/300;
}

function draw3DStar() {
	fill(255,255,0);
	for(var t = 0; t < max_theta; t+=2*PI/300){
	    var x = 5* Math.pow(cos(t), 3);
        var y = 5* Math.pow(sin(t), 3);
	    var z = 5* Math.pow(cos(t), 3);
		dots.push({x: x, y: y, z: z});
	} 
	max_theta += 2*PI/300;


}

function draw3DStar2() {
	//scale(scaleFactor);
	for(var t = 0; t < max_theta; t+=2*PI/300){
	    var x = 10* Math.pow(cos(t), 3);
        var y = 10* Math.pow(sin(t), 3);
	    var z = 10* Math.pow(cos(t), 3);
		dots.push({x: x, y: y, z: z});
	} 
	max_theta += 2*PI/300;


}

function draw3DStar3() {
	//scale(scaleFactor);
	for(var t = 0; t < max_theta; t+=2*PI/300){
	    var x = 2* Math.pow(cos(t), 3);
        var y = 2* Math.pow(sin(t), 3);
	    var z = 2* Math.pow(cos(t), 3);
		dots.push({x: x, y: y, z: z});
	} 
	max_theta += 2*PI/300;


}

function mouseClicked() {
	generateNewShapes = true;
}


