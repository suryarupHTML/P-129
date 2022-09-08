leftWristx = 0;
leftWristy = 0; 
rightWristx = 0; 
rightWristy = 0;
song = "";
function preload() 
{   
    m1 = loadSound("music.mp3");     
    m2 = loadSound("music2.mp3"); 
}
function setup()
{     
    video = createCapture(VIDEO);     
    video.size(550, 500);     
    video.position(500, 200);  
    poseNet = ml5.poseNet(video, modelLoaded);     
    poseNet.on('pose', gotPoses); 
}
function modelLoaded() 
{    
    console.log("poseNet is initialized"); 
}
function gotPoses(results) 
{    
    if(results[0].length > 0)    
    { 
        console.log(results);        
        leftWristX = results[0].pose.leftWrist.x;        
        leftWristY = results[0].pose.leftWrist.y;        
        console.log("leftWristX = " + leftWristX + ", leftWristY = " + leftWristY);        rightWristX = results[0].pose.rightWrist.x;        
        rightWristY = results[0].pode.rightWrist.y;        
        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);    
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    circle(leftWristX, leftWristY, 20);

    if(leftWristX > 0 && leftWristX < 300)
    {
        song = m1;
        document.getElementById("song").innerHTML = "First Song";
    }
    else
    {
        song = m2;
        document.getElementById("song").innerHTML = "Second Song";
    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}