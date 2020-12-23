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
    var x = evt.alpha; //0 to 360
    var y = evt.beta; //-180 to 180
    var z = evt.gamma; //-90 to 90
    // now map all vars to only be positive
    var mappedX = x;//0 to 360
    var mappedY = y + 180; //0 to 360
    var mappedZ = z + 90; //0 to 180
    //normalize all vars to range of 0 to 255
    var normX = Math.floor((mappedX/360)*255);
    var normY = Math.floor((mappedY/360)*255);
    var normZ = Math.floor((mappedZ/180)*255);

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
                alert("won");
                setRandomColor();
            } 
        } 
   } 
   
}