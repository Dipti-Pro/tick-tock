var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    

    //To create ab iterative rotation
    
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
  

    //drawing mins hand


    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds


    //Minutes
    
    
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}