function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotposes);

    
}


function draw() {
    image(video, 0, 0, 400, 400)

}


function take_snapshot() {
    save("student_name.png");
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x - 20;
        nosey = results[0].pose.nose.y - 20;
        console.log("nosex = " + nosex)
        console.log("nosey = " + nosey)
    }
}