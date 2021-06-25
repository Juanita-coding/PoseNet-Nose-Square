function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas= createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("Pose", gotPoses);
}

function draw()
{
    background("#FFDFD3");

}

function modelLoaded()
{
    console.log("PoseNet Model is Initilaized");
}

function gotPoses(results)

{
 if(results.length>0)
 {
     console.log(results);
 }
}
