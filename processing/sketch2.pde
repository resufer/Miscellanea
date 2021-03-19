int x=700, y = 500, r = 100, count = 0;

void setup() {
  size(1400,1000);
}

void draw() {
  background(200, 10, 175);
  fill(12, 113, 120);
  ellipse(x, y, r, r);
  
  if (x + r/2 > 1400 || count > 0) {
    x -= 50;
    count++;
  }
  
  if (r > 500) {
    x++;
  } else {
    r++;
  }
}
