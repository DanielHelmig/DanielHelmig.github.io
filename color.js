var randomRed = 0;
var randomGreen = 0;
var randomBlue  = 0;
var difficulty = 60; //higher number = easier
function setRandomColor() {
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    var bg = document.getElementById("randomColorBox");
    bg.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    /*var randomText = document.getElementById("randomColor");
    randomText.innerHTML = bg.style.backgroundColor;
    var userText = document.getElementById("userColor");
    userText.innerHTML = "rgb(0,0,0)";*/
    randomRed = red;
    randomGreen = green;
    randomBlue = blue;
}

function handleOrientation(evt) {
    var abs = evt.absolute;
    var x = evt.alpha; //0 to 359
    var y = evt.beta; //-180 to 180
    var z = evt.gamma; //-90 to 90
    
    if (x >= 0 & x <= 45) {//0 to 45 deg
        //do nothing
    }
    else if (x > 45 && x <= 180) { //45 to 180 deg
        x = 45; //cut off
    } else if (x > 180 && x <= 315) { //181 to 315 deg
        x = -45; //cut off
    } else if (x > 315 && x <= 360) { //315 to 360 deg
       x = x - 360;
    } //x now [-45,45]

    if (y<=-45) {
        y = -45;
    } else if (y>=45) {
        y = 45;
    } //y now [-45,45]

    if (z<=-45) {
        z = -45;
    } else if (z>=45) {
        z = 45;
    }   //z now [-45, 45]

    // now map all vars to only be positive
    var mappedX = x + 45;//0 to 90
    var mappedY = y + 45; //0 to 90
    var mappedZ = z + 45; //0 to 90
    //normalize all vars to range of 0 to 255
    var normX = Math.floor((mappedX/90)*255); //red
    var normY = Math.floor((mappedY/90)*255); //green
    var normZ = Math.floor((mappedZ/90)*255); //blue
    checkColor(normX, normY, normZ);
    setBG(normX, normY, normZ);
}


function handleSlider() {   
    var redSlider = document.getElementById("redSlider");
    var greenSlider = document.getElementById("greenSlider");
    var blueSlider = document.getElementById("blueSlider");
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    checkColor(red, green, blue);
    setBG(red, green, blue);
}

function setBG(red, green, blue) {
    var bg = document.getElementById("userColorBox");
    bg.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    //document.getElementById("userColor").innerHTML = bg.style.backgroundColor;
}


function checkColor(red, green, blue) {
   if (randomRed+difficulty>red && randomRed-difficulty<red) {
        if (randomGreen+difficulty>green && randomGreen-difficulty<green) {
            if (randomBlue+difficulty>blue && randomBlue-difficulty<blue) {
                var wonBox = document.querySelector(".wonBox");
                wonBox.style.display = "flex";
                setRandomColor();
            } 
        } 
   } 
   
}

function closeWonBox() {
    var wonBox = document.querySelector(".wonBox");   
    wonBox.style.display = "none";
}