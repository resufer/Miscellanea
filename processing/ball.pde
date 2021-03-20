int x = 100, y = 100, r = 50, speed = 10;
float randomDirection = (int) (Math.random() * 5);

void setup() {
  size(1400,1000);
}

void draw() {
  fill(0, 256, 56);
  background(255, 255, 255);
  if (keyPressed) {
    if ((key == 'd') || (key == 'D')) {
      randomDirection = 2;
    } else if ((key == 's') || (key == 'S')) {
      randomDirection = 3;
    } else if ((key == 'a') || (key == 'A')) {
      randomDirection = 4;
    } else if ((key == 'w') || (key == 'W')) {
      randomDirection = 1;
    } else if (key == ' ') {
      randomDirection = 0;
    } else if (key == '1') {
      speed = 1;
    } else if (key == '2') {
      speed = 5;
    } else if (key == '3') {
      speed = 15;
    } else if (key == '4') {
      speed = 25;
    } else if (key == '5') {
      speed = 100;
    }
  }
  
  if (x + r/2 > 1400) {
    randomDirection = 4;
  } else if (x - r/2 < 0) {
    randomDirection = 2;
  } else if (y + r/2 > 1000) {
    randomDirection = 1;
  } else if (y - r/2 < 0) {
    randomDirection = 3;
  }

  if (int(randomDirection) == 1) {
    y -= speed;
  } else if (int(randomDirection) == 2) {
    x += speed;
  } else if (int(randomDirection) == 3) {
    y += speed;
  } else if (int(randomDirection) == 4) {
    x -= speed;
  } else if (int(randomDirection) == 0) {
    
  } else {
    randomDirection = (int) (Math.random() * 5);
  }
  
  ellipse(x, y, r, r);
  
}
