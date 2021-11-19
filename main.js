objectDetector= "";

img = "";
objects = [];
status = "";
function preload() {
    img = loadImage('dog_cat.jpg');

}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i > objects.length; i++) {
            document.getElementById("status").innerHTML = "status: objects";
            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, object[i].y);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }


    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("FF0000");
    rect(300, 90, 270, 320);


}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "States : Dectcting Objects";
    console.log("Calling Model");
}
function modelLoaded() {
   
    states = true;
    objectDetector.detect(img, gotResult);
    console.log("model Loaded!");
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}