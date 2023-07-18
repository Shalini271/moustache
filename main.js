nose_x=0;
nose_y=0;

function preload(){
glasses = loadImage("glasses.png");
moustache = loadImage("moustache.png");
}

function setup(){
canvas=createCanvas(400,300);
canvas.center();
video=createCapture(VIDEO);
video.size(400,300);
video.hide();
posenet=ml5.poseNet(video,modelReady);
posenet.on("pose",gotResults);
}

function draw(){
image(video,0,0,400,300);
image(glasses,nose_x-75,nose_y-60,150,60);
image(moustache,nose_x-75,nose_y-10,150,60);
}

function take_photo(){
    save("filter.jpg");
}

function modelReady(){
    console.log("Model is successfully loaded.");
}

function gotResults(results){
    if (results.length > 0){
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
    }
}