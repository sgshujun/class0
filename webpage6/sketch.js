function setup() {
    //Create the canvas and save it to a variable;
    const myCanvas = createCanvas(window.innerWidth, 3000);
    //Set the parent of the canvas to an exisitng html element's id value
    myCanvas.parent("canvas-container");
    //background(240);
}

function draw() {
    background(240,60);
    mouseMoved()
}

function mouseMoved() {
    strokeWeight(1);
  stroke(255,0,246,180);
  fill(0,211,255,180);
    ellipse(mouseX, mouseY, 70, 70);
}