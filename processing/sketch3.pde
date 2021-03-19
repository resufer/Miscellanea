int x = 100, y = 100, r = 50, count = 0;
float x1 = 100, y1 = 100;

void setup() {
  size(1400,1000);
}

void draw() {
  x1 = random(1400);
  y1 = random(1000);
  fill(random(256), random(256), random(256));
  ellipse(x1, y1, r, r);
  
}
