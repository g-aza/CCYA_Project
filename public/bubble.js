let bubbles;

function createBubbles ()

function setup() {  
    createCanvas (640, 480);
    bubbles = [];
    for (let i=0; i < 80; i++){
        //randomise bubble position
        let x = random() * width;
        let y = random() * height;
        let diameter = random(50, 130);
        let bubbleSpeed = random(1, 4);

        bubbles.push(createBubble(x, y, diameter, bubbleSpeed));

    }
   // bubble = createBubble(50, 50, 100, 5);
   // frameRate (200);
   // background(blue); --  Put it here to draw a new circle every frame.
}
function draw(){
    background('#EFDC05');
    for (let bubble of bubbles){
   bubble.draw();
   bubble.move();
    //drawBubble(mouseX, mouseY, 100);
   rect(0, 200, 700, 100)
    }
}

function createBubble(xPos, yPos, diameter, bubbleSpeed){
    return {
        x: xPos,
        y: height + yPos,
        diameter: diameter,
        bubbleSpeed: bubbleSpeed,
        draw: function(){
            fill(30, 144, 255, 140);
            stroke ('white');
            ellipse( this.x, this.y, this.diameter);
            fill(255);
            ellipse(this.x + this.diameter/4, this.y - this.diameter/4, this.diameter/5);
        },
        move: function(){
            this.y -= this.bubbleSpeed;
            if (this.y < 0 - this.diameter/2) {
                this.y = height + this.diameter/2;
            }
        }
    }
}
function drawBubble(x, y, diameter) {
    fill(30, 144, 255, 140);
    stroke ('white')
    ellipse(x, y, diameter);
    fill(255);
    ellipse(x + diameter/4, y - diameter/4, diameter/5)
}