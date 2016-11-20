var cX = 500;
var cY = 200;

function setup()
{
   var d;

   createCanvas(1000, 600);
   background(0,0,100);
   noStroke();

   // draw sky background
   for (var y=5; y<height; y+=5)
   {
      for (var x=5; x<width; x+=18)
      {
         d = distance(x, y, x, height);
         fill(92 - d/7, 54, 165, 80);
         ellipse(x+random(-10,10), y+random(-10,10), 45, 7);
      }
   }

   // draw moon
   for (var y = 5; y<height; y+=5){
    for (var x=5; x<width; x+=5) {
        if(imp_circle(cX, cY, x, y, 180) < 0) {
          d = (cX, cY, x, y);
          fill(254, 252, 215, d/3);
          ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
        }
    }
  }

  // draw the glow around the moon
  for (var y = 5; y<height; y+=5){
   for (var x=5; x<width; x+=5) {
       if(imp_circle(cX, cY, x, y, 230) < 0 && imp_circle(cX, cY, x, y, 180) > 0) {
         d = (cX, cY, x, y);
         fill(255, 255, 255, d/40);
         ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
       }
   }
 }

   var res1, res2, res3, res4, res5, res6;
   // draw the mountains
   for (var y = 5; y<height; y+=5){
     for (var x=5; x<width; x+=5) {
        d = distance(x, y, x, height);
        res1 = imp_line(x, y, 10, 600, 248, 270);
        res2 = imp_line(x, y, 268, 270, 826, 600);
        if(res1 > 0 && res2 > 0) {
          fill(131, 135, 255, random(40,80));
          ellipse(x+random(-10,10), y+random(-10,10), 45, 7);
        }


        res3 = imp_line(x, y, 356, 318, 485, 215);
        res4 = imp_line(x, y, 485, 215, 680, 352);
        if(res3 > 0 && res4 > 0) {
          fill(131, 135, 255, random(40,80));
          ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
        }

        res5 = imp_line(x, y, 680, 352, 725, 319);
        res6 = imp_line(x, y, 725, 319, 999, 495);
        if(res5 > 0 && res6 > 0) {
          fill(131, 135, 255, random(40,80));
          ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
        }

    }
  }

  // draw the inside of mountains
  for (var y = 5; y<height; y+=5){
    for (var x=5; x<width; x+=5) {
       d = distance(x, y, x, height);
       res1 = imp_line(x, y, 20, 600, 258, 270);
       res2 = imp_line(x, y, 258, 270, 816, 600);
       if(res1 > 0 && res2 > 0) {
         fill(59, 73, 146, random(40,80));
         ellipse(x+random(-10,10), y+random(-10,10), 45, 7);
       }


       res3 = imp_line(x, y, 386, 318, 515, 215);
       res4 = imp_line(x, y, 465, 215, 660, 352);
       if(res3 > 0 && res4 > 0) {
         fill(59, 73, 146, random(40,80));
         ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
       }

       res5 = imp_line(x, y, 700, 352, 745, 319);
       res6 = imp_line(x, y, 705, 319, 980, 495);
       if(res5 > 0 && res6 > 0) {
         fill(59, 73, 146, random(40,80));
         ellipse(x+random(-2,2), y+random(-2,2), 45, 7);
       }

   }
 }
}

function imp_line(x, y, x0, y0, x1, y1)
{
   return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function distance(x0, y0, x1, y1)
{
  return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}

function imp_circle(cX, cY, x, y, radius) {
  return (x-cX)*(x-cX) + (y-cY)*(y-cY) - radius*radius;
}
