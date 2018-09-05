export default function sketch (p) {

  p.setup = function () {
    p.createCanvas(500, 400);
    p.background(255);
  };

  p.draw = function () {
    p.stroke(0);
    if (p.mouseIsPressed === true) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }
  };
};