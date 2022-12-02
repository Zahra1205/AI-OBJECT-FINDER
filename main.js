status = "";

function preload(){

}
function setup(){
canvas = createCanvas(480, 380);
canvas.center();

}

function draw(){

}
function start(){
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Objects Detecting";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}