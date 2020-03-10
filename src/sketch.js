// setup initializes this to a p5.js Video instance.
let video;
let lineScore;

// p5js calls this code once when the page is loaded (and, during development,
// when the code is modified.)

export function setup() {
  createCanvas(640, 480);
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
  // Modify the graphics context to flip all remaining drawing horizontally.
  // This makes the image act like a mirror (reversing left and right); this is
  // easier to work with.
  translate(width, 0); // move the left side of the image to the right
  scale(-1.0, 1.0);
  //image(video, 0, 0, video.width, video.height);
  drawKeypoints(poses);
  drawSkeleton(poses);
}


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

// Initialize the game
function initialize(){
  score = 0;
  hits = [];
  letters = [];
  frm = frameCount;
}



// Letter class
class Letter {
  constructor(x, y, txt) {
    // properties
    this.x = x;
    this.y = y;
    this.size = 45;
    this.xSpd = 0;
    this.ySpd = random(7, 13);
    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.txt = txt;
    // Lifespan of the firework
    this.lifespan = 1.0; // 100%
    this.lifeReduction = random(0.008, 0.015);
    this.isDone = false;
  }
  // methods

  updateLifespan() {
    this.lifespan -= this.lifeReduction;
    if (this.lifespan <= 0.0) {
      this.isDone = true;
    }
  }

  // move the letter
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  // display the letter
  display() {
    noStroke();
    fill(255, 255, 255, 0);
    ellipse(this.x, this.y, this.size, this.size);

    fill(this.r, this.g, this.b);
    textSize(50);
    textFont('Georgia');
    text( this.txt, this.x - 4, this.y + 6);
  }

  // hit the letter
  hit(){
    for (let i = 0; i < 20; i++){
      hits.push( new Hit(this.x, this.y) );
    }
  }
}

// Explosion class
class Hit {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(10, 25);
    this.xSpd = random(-2, 2);
    this.ySpd = random(-2, 2);
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.lifespan = 0.3; // 50%
    this.lifeReduction = random(0.002, 0.008);
    this.isDone = false;
  }


  move() {
    this.x -= this.xSpd;
    this.y -= this.ySpd;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, 500 * this.lifespan);
    ellipse(this.x, this.y, this.size * this.lifespan, this.size * this.lifespan);
  }

  updateLifespan() {
    this.lifespan -= this.lifeReduction;
    if (this.lifespan <= 0.0) {
      this.isDone = true;
    }
  }
}
