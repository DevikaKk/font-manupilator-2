function setup() {
    var canvas = createCanvas(550, 500);
    canvas.position(600, 150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    background('#969A97')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
