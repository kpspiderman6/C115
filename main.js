function setup(){
   canvas = createCanvas(300,300) ;
   canvas.center();
   video = createCapture(VIDEO);
   video.size (250, 250);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}
function preload(){

}

function draw(){
    image(video, 0 ,0,300,300);
}
function snap(){
    save('my_snapshot.png');
    
}
function modelLoaded(){
    console.log("posenet is iniztialised");
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("nosex = "+results[0].pose.nose.x);
    console.log("nosey = "+results[0].pose.nose.y);
}
}