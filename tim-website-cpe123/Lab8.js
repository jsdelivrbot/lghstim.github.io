var img;
var img2;
var img3;
var img4;


function preload() {
  img = loadImage("tim.png");
  img2 = loadImage("tim.png");
  img3 = loadImage("tim.png");
  img4 = loadImage("tim.png");
}

function setup() {
  createCanvas(480, 480);
  img.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  img4.loadPixels();
  background(0);
  noLoop();

  var pixel;
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      pixel = img.get(x, y); // color at that pixel
      // set rainbow or black color level 3
      if (pixel[0] < 170 && pixel[1] < 170 && pixel[2] < 170) {
        if ((x > 84 && x < 190 && y > 40 & y < 90) || (x > 163 && x < 185 && y > 84 && y < 140) || (x > 82 && x < 97 && y > 88 && y < 137)) {
          img.set(x, y, [random(200), random(200), random(200), 255]);
          img2.set(x, y, [random(255), random(255), random(255), 255]);
          img3.set(x, y, [random(100), random(100), random(100), 255]);
          img4.set(x, y, [random(140), random(140), random(140), 255]);
        }
        else {
          img.set(x, y, [0, 0, 0, 255]);
          img2.set(x, y, [0, 0, 0, 255]);
          img3.set(x, y, [0, 0, 0, 255]);
          img4.set(x, y, [0, 0, 0, 255]);

        }
      }
      // set gray color level 2
      else if (pixel[0] < 220 && pixel[1] < 220 && pixel[2] < 220) {
        img.set(x, y, [120, 120, 120, 255]);
        img2.set(x, y, [120, 120, 120, 255]);
        img3.set(x, y, [120, 120, 120, 255]);
        img4.set(x, y, [120, 120, 120, 255]);

      }
      // set white color level 1
      else if (pixel[0] < 255 && pixel[1] < 255 && pixel[2] < 255) {
        img.set(x, y, [255, 255, 255, 255]);
        img2.set(x, y, [255, 255, 255, 255]);
        img3.set(x, y, [255, 255, 255, 255]);
        img4.set(x, y, [255, 255, 255, 255]);

      }
    }
  }

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      pixel = img.get(x, y); // color at that pixel

      // set all reds to blue for first image
      if (pixel[0] > 225 && pixel[1] < 20 && pixel[2] < 20) {
        img.set(x, y, [0, 0, 255, 255]);
        img2.set(x, y, [255, 0, 255, 255]);
        img3.set(x, y, [0, 255, 150, 255]);
        img4.set(x, y, [255, 255, 0, 255]);
      }

      if (pixel[0] <= 60 && pixel[1] <= 68 && pixel[2] <= 160) {
        // change the shirt color to green
        if (y > 190) {
          img.set(x, y, [0, 255, 0, 255]);
          img2.set(x, y, [200, 0, 0, 255]);
          img3.set(x, y, [0, 0, 180, 255]);
          img4.set(x, y, [150, 150, 0, 255]);
        }
      }
    }
  }

  img.updatePixels();
  img2.updatePixels();
  img3.updatePixels();
  img4.updatePixels();
}

function draw() {
  image(img, 0, 0);
  image(img2, width/2, 0);
  image(img3, 0, height/2);
  image(img4, width/2, height/2);
}


function distance(x0, y0, x1, y1)
{
  return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}

function _circle(cX, cY, x, y, radius) {
  return (x-cX)*(x-cX) + (y-cY)*(y-cY) - radius*radius;
}
