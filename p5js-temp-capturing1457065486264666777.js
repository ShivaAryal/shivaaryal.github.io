var video;
function setup() {
  createCanvas(400,400);
  background(0);
  video = createCapture(VIDEO); //for the video
  video.size(400,400);
  button=createButton('snap');
  button.mousePressed(takesnap);
  //video.hide();
}

function draw() {
  
  //tint(200,200,0);
  //image(video,0,0);
}
function takesnap(){
  image(video,0,0);
}