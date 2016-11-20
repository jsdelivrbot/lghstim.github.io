var ROT = 300;
var SPD = .95;
var SPDUP = 1.04;
var flapROT = 260;

function land(bf){
	
}
function flyRight(bf){
	checkStateChange(bf);
	push();
		if(bf.masterRot < PI/2){
			bf.masterRot += PI/60;
		}
		rotate(bf.masterRot);
		if(bf.leftWing.width > -1 && bf.down){
			bf.leftWing.width -= 1/30*bf.flapSpeed;
			bf.rightWing.width -= 1/30*bf.flapSpeed;
		}else if(bf.leftWing.width < 1){
			bf.down = false;
			bf.leftWing.width += 1/30*bf.flapSpeed;
			bf.rightWing.width += 1/30*bf.flapSpeed;
		}else if(bf.down == false){
			bf.down = true;
		}
		push();
			scale(bf.leftWing.width, 1);
			leftWing();
		pop();
		body();
		push();
		if(bf.masterRot>=PI/2){
			scale(-bf.rightWing.width, 1);
		}else scale(bf.rightWing.width, 1);
			rightWing();
		pop();
	pop();

}
function flyLeft(bf){
	checkStateChange(bf);
}
function changeDirection(bf){
	
}
function takeOff(bf){
	if(bf.leftWing.rotate < PI/4){
		bf.leftWing.rotate += (PI/ROT*bf.leftWing.speed);
			
			if(bf.leftWing.rotate > PI/6)
				bf.leftWing.speed *= SPD;
			else if(bf.leftWing.rotate < PI/6) bf.leftWing.speed *= SPDUP + .05;
			
		}
		push();
			rotate(bf.leftWing.rotate + PI/8);
			leftWing();
		pop();
		
		if(bf.rightWing.rotate > -PI/4){
			bf.rightWing.rotate -= (PI/ROT*bf.rightWing.speed);
			
			if(bf.rightWing.rotate > PI/6)
				bf.rightWing.speed *= SPD;
			else if (bf.rightWing.rotate < PI/6)bf.rightWing.speed *= SPDUP + .05;
			
		}
		push();
			rotate(bf.rightWing.rotate - PI/8);
			rightWing();
		pop();
}
//TODO : add bounce to bottom part of flap
function flyUp(bf){
	checkStateChange(bf);
	if(bf.leftWing.rotate > -PI/9 && bf.start)
		idle(bf);
	else{
		bf.timer++;
		bf.start = false;
		body();
		if(bf.timer < 100)
		{
			takeOff(bf);
		}else{
			push();
				body();
				rotate(bf.leftWing.rotate + PI / 8);
				console.log("left wing: " + bf.leftWing.speed);
				
				if(bf.leftWing.rotate > -PI/8 && bf.leftWing.direction == 1){
					bf.leftWing.rotate -= (PI/flapROT*bf.leftWing.speed);
					
					if(bf.leftWing.rotate < -PI/16)
						bf.leftWing.speed *= SPD + .04;
					else if (bf.leftWing.rotate > PI/16)
						bf.leftWing.speed *= SPDUP + .04;
					bf.leftWing.width -= .01;
				}else if(bf.leftWing.direction == 1)
				{
					bf.leftWing.rotate = -PI/8;
					bf.leftWing.direction = -1;
					bf.leftWing.speed = .3
				}
				
				if(bf.leftWing.rotate < PI/8 && bf.leftWing.direction == -1){
					bf.leftWing.rotate += (PI/flapROT*bf.leftWing.speed);
					
					if(bf.leftWing.rotate > PI/16)
						bf.leftWing.speed *= SPD + .04;
					else if(bf.leftWing.rotate < -PI/16) bf.leftWing.speed *= SPDUP + .04;
					if(bf.leftWing.width<1)
						bf.leftWing.width += .01;
				}else if (bf.leftWing.direction == -1){
					bf.leftWing.rotate = PI/8;
					bf.leftWing.speed = .3;
					bf.leftWing.direction = 1;
				}
				scale(bf.leftWing.width, 1);
				leftWing();
		pop();
		push();
			rotate(bf.rightWing.rotate - PI/8);
			
			if(bf.rightWing.rotate < PI/8 && bf.rightWing.direction == 1){
				bf.rightWing.rotate += (PI/flapROT*bf.rightWing.speed);
				
				if(bf.rightWing.rotate > PI/16)
					bf.rightWing.speed *= SPD + .04;
				else if (bf.rightWing.rotate < -PI/16)
					bf.rightWing.speed *= SPDUP + .04;
				bf.rightWing.width -= .01;
			}else if(bf.rightWing.direction == 1)
			{
				bf.rightWing.rotate = PI/8;
				bf.rightWing.speed = .3;
				bf.rightWing.direction = -1;

			}
			
			if(bf.rightWing.rotate > -PI/8 && bf.rightWing.direction == -1){
				bf.rightWing.rotate -= (PI/flapROT*bf.rightWing.speed);
				
				if(bf.rightWing.rotate > PI/16)
					bf.rightWing.speed *= SPDUP + .04;
				else if (bf.rightWing.rotate <  -PI/16)bf.rightWing.speed *= SPD + .04;
				if(bf.rightWing.width<1)
					bf.rightWing.width += .01;
				
			}else if (bf.rightWing.direction == -1){
				bf.rightWing.rotate = -PI/8;
				bf.rightWing.speed = .3;
				bf.rightWing.direction = 1;
				
			}
			scale(bf.leftWing.width, 1);
			rightWing();
		pop();
		}
	}
	
}
function idle(bf){
	checkStateChange(bf);
	push();
		body();
		rotate(bf.leftWing.rotate + PI / 8);
		console.log("left wing: " + bf.leftWing.speed);
		
		if(bf.leftWing.rotate > -PI/8 && bf.leftWing.direction == 1){
			bf.leftWing.rotate -= (PI/ROT*bf.leftWing.speed);
			
			if(bf.leftWing.rotate < -PI/16)
				bf.leftWing.speed *= SPD;
			else if (bf.leftWing.rotate > PI/16)
				bf.leftWing.speed *= SPDUP;
		}else if(bf.leftWing.direction == 1)
		{
			bf.leftWing.rotate = -PI/8;
			bf.leftWing.direction = -1;
			bf.leftWing.speed = .3
		}
		
		if(bf.leftWing.rotate < PI/8 && bf.leftWing.direction == -1){
			bf.leftWing.rotate += (PI/ROT*bf.leftWing.speed);
			
			if(bf.leftWing.rotate > PI/16)
				bf.leftWing.speed *= SPD;
			else if(bf.leftWing.rotate < -PI/16) bf.leftWing.speed *= SPDUP;
		}else if (bf.leftWing.direction == -1){
			bf.leftWing.rotate = PI/8;
			bf.leftWing.speed = .3;
			bf.leftWing.direction = 1;
		}
		leftWing();
	pop();
	push();
		rotate(bf.rightWing.rotate - PI/8);
		
		if(bf.rightWing.rotate < PI/8 && bf.rightWing.direction == 1){
			bf.rightWing.rotate += (PI/ROT*bf.rightWing.speed);
			
			if(bf.rightWing.rotate > PI/16)
				bf.rightWing.speed *= SPD;
			else if (bf.rightWing.rotate < -PI/16)
				bf.rightWing.speed *= SPDUP;
		}else if(bf.rightWing.direction == 1)
		{
			bf.rightWing.rotate = PI/8;
			bf.rightWing.speed = .3;
			bf.rightWing.direction = -1;
		}
		
		if(bf.rightWing.rotate > -PI/8 && bf.rightWing.direction == -1){
			bf.rightWing.rotate -= (PI/ROT*bf.rightWing.speed);
			
			if(bf.rightWing.rotate > PI/16)
				bf.rightWing.speed *= SPDUP;
			else if (bf.rightWing.rotate <  -PI/16)bf.rightWing.speed *= SPD;
			
		}else if (bf.rightWing.direction == -1){
			bf.rightWing.rotate = -PI/8;
			bf.rightWing.speed = .3;
			bf.rightWing.direction = 1;
		}
		rightWing();
	pop();
}
function checkStateChange(bf){
	if(bf.state != bf.lastState){
		bf.lastState = bf.state;
		first = true;
		bf.timer = 0;
		bf.masterRot = 0;
	}
}