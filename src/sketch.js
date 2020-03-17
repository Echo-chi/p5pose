// setup initializes this to a p5.js Video instance.
let video;
let lineScore;
let poses;

let particle={
  x:Math. random() * 640,
  y:Math. random() * 480,
  dx:1,
  dy:1,
}



// p5js calls this code once when the page is loaded (and, during development,
// when the code is modified.)

export function setup() {
  createCanvas(640, 480);
  //createCanvas(windowWidth,windowHeight);
  video = select("video") || createCapture(VIDEO);
  video.size(width, height);



  // Create a new poseNet method with single-pose detection. The second argument
  // is a function that is called when the model is loaded. It hides the HTML
  // element that displays the "Loading model…" text.
  const poseNet = ml5.poseNet(video, () => select("#status").hide());

  // Every time we get a new pose, apply the function `drawPoses` to it (call
  // `drawPoses(poses)`) to draw it.
  poseNet.on("pose", drawPoses);

  // Hide the video element, and just show the canvas
  //video.hide();

}
// p5js calls this function once per animation frame. In this program, it does
// nothing---instead, the call to `poseNet.on` in `setup` (above) specifies a
// function that is applied to the list of poses whenever PoseNet processes a
// video frame.
export function draw() {


}

function drawPoses(poses) {
  background(0,0,0,255);
  //rect(0,0,10,10);

  // if(particle.x>=640 || particle.x<0){
  //   particle.dx=-particle.dx;
  // }
  //
  //
  //
  // if(particle.y>=480 || particle.y<0){
  //   particle.dy=-particle.dy;
  // }
  // particle.x+=particle.dx;
  // particle.y+=particle.dy;
  // particle.dy+=0.1;
  // fill("red");
  // circle(particle.x,particle.y,30,30);

  if (poses[0]!= undefined){
  // console.log(poses);
  var partname = poses[0].pose.keypoints;
  // console.log(partname);
  var leftWrist = partname[9];
  var rightWrist = partname[10];
  var nose=partname[0];
  var leftEye = partname[1];
  var rightEye = partname[2];
  var leftEar = partname[3];
  var rightEar = partname[4];
  var leftShoulder = partname[5];
  var rightShoulder = partname[6];
  var leftElbow = partname[7];
  var rightElbow = partname[8];
  var leftHip = partname[11];
  var rightHip = partname[12];
  var leftKnee = partname[13];
  var rightKnee = partname[14];
  var leftAnkle = partname[15];
  var rightAnkle = partname[16];

   console.log(leftWrist);
   console.log(rightWrist);
  let d0x=nose.position.x;
  let d0y=nose.position.y;
  let d1x=leftEye.position.x;
  let d1y=leftEye.position.y;
  let d2x=rightEye.position.x;
  let d2y=rightEye.position.y;
  let d3x=leftEar.position.x;
  let d3y=leftEar.position.y;
  let d4x=rightEar.position.x;
  let d4y=rightEar.position.y;
  let d5x=leftShoulder.position.x;
  let d5y=leftShoulder.position.y;
  let d6x=rightShoulder.position.x;
  let d6y=rightShoulder.position.y;
  let d7x=leftElbow.position.x;
  let d7y=leftElbow.position.y;
  let d8x=rightElbow.position.x;
  let d8y=rightElbow.position.y;
  let d9x=leftWrist.position.x;
  let d9y=leftWrist.position.y;
  let d10x=rightWrist.position.x;
  let d10y=rightWrist.position.y;
  let d11x=leftHip.position.x;
  let d11y=leftHip.position.y;
  let d12x=rightHip.position.x;
  let d12y=rightHip.position.y;
  let d13x=leftKnee.position.x;
  let d13y=leftKnee.position.y;
  let d14x=rightKnee.position.x;
  let d14y=rightKnee.position.y;
  let d15x=leftAnkle.position.x;
  let d15y=leftAnkle.position.y;
  let d16x=rightAnkle.position.x;
  let d16y=rightAnkle.position.y;


  // if(particle.x>=640 || particle.x<0){
  //   particle.dx=-particle.dx;
  // }
  //
  //
  //
  // if(particle.y>=480 || particle.y<0){
  //   particle.dy=-particle.dy;
  // }
  //
  // if(particle.x===d0x||particle.y===d0y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d1x||particle.y===d1y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d2x||particle.y===d2y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d3x||particle.y===d3y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d4x||particle.y===d4y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d5x||particle.y===d5y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d6x||particle.y===d6y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d7x||particle.y===d7y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d8x||particle.y===d8y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d9x||particle.y===d9y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d10x || particle.y===d10y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d11x || particle.y===d11y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d12x || particle.y===d12y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d13x || particle.y===d13y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d14x || particle.y===d14y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d15x || particle.y===d15y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  // if(particle.x===d16x || particle.y===d16y){
  //   particle.dx=-particle.dx;
  //   particle.dy=-particle.dy;
  // }
  //


if (particle.x>=640 || particle.x<0 || particle.x==d0x||particle.x==d1x||particle.x==d2x||particle.x===d3x||particle.x==d4x||particle.x==d5x||particle.x==d6x||particle.x==d7x||particle.x==d8x||particle.x==d9x||particle.x==d10x||particle.x==d11x||particle.x==d12x||particle.x==d13x||particle.x==d14x||particle.x==d15x||particle.x==d16x){
  particle.dx=-particle.dx;
}

if(particle.y>=480 || particle.y<0 || particle.y==d0y ||particle.y==d1y ||particle.y==d2y ||particle.y==d3y ||particle.y==d4y ||particle.y==d5y ||particle.y==d6y ||particle.y==d7y ||particle.y==d8y ||particle.y==d9y ||particle.y==d10y ||particle.y==d11y ||particle.y==d12y ||particle.y==d13y ||particle.y==d14y ||particle.y==d15y ||particle.y==d16y){
  particle.dy=-particle.dy;
}

  particle.x+=particle.dx;
  particle.y+=particle.dy;
  particle.dy+=0.01;
  fill("red");
  circle(particle.x,particle.y,30,30);



  // bounceParticles()
  //   particles.forEach(moveParticle)
  //   particles.forEach(drawParticle)


    // Modify the graphics context to flip all remaining drawing horizontally.
    // This makes the image act like a mirror (reversing left and right); this is
    // easier to work with.

    translate(width, 0); // move the left side of the image to the right
    scale(-1.0, 1.0);
    //image(video, 0, 0, video.width, video.height);
    drawKeypoints(poses);
    drawSkeleton(poses);

  }


// function moveParticle(particle) {
//     if (particle.x < 0 || particle.x >= width) {
//         particle.dx = -particle.dx;
//     }
//     if (particle.y<0 || particle.y >= height) {
//         particle.dy = -particle.dy;
//     }
//     particle.x += particle.dx
//     particle.y += particle.dy
//     particle.dx*=0.99
//     particle.dy*=0.99
// }
// function bounceParticles() {
//     let f = 0.01
//     particles.forEach(p1 => {
//         particles.forEach(p2 => {
//             if (p1 === p2) { return }
//             let dx = p2.x - p1.x
//             let dy = p2.y - p1.y
//             let distance = sqrt(dx ** 2 + dy ** 2)
//             if (distance < 10) {
//                 p1.dx -= f * dx
//                 p1.dy -= f * dy
//                 p2.dx += f * dx
//                 p2.dy += f * dy
//             }
//         })
//     })
// }
// function drawParticle(particle) {
//     fill("white")
//     circle(particle.x, particle.y, 10, 10)
// }







// Draw ellipses over the detected keypoints
function drawKeypoints(poses) {
  poses.forEach(pose =>
    pose.pose.keypoints.forEach(keypoint => {
      if (keypoint.score > 0.2) {
        fill(255, 255, 255);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 30, 30);
      }
    })
  );
}
// Draw connections between the skeleton joints.
function drawSkeleton(poses) {
  poses.forEach(pose => {
    pose.skeleton.forEach(skeleton => {
      // skeleton is an array of two keypoints. Extract the keypoints.
      const [p1, p2] = skeleton;
      lineScore=skeleton[0].score*skeleton[1].score
      stroke(lineScore*100, 0,100);
      strokeWeight(lineScore*30);
      line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
    });
  });
}
}
