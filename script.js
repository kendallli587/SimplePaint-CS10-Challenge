// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

// Main Program Loop (60 FPS default)
requestAnimationFrame(loop);

function loop() {
    // Update Variables

    // Draw if mouseIsPressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }
    requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    // Save Previous mouse x and y
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
    if (event.code == "Space") {
        // Draw Background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height)
    } else if (event.code == "ArrowUp"){
        size++;
    } else if (event.code == "ArrowDown") {
        size--;
    } else if (event.code == "Digit1") {
        penColor = "black";
    } else if (event.code == "Digit2") {
        penColor = "green";
    } else if (event.code == "Digit3") {
        penColor = "blue";
    } else if (event.code == "Digit4") {
        penColor = "pink";
    } else if (event.code == "Digit5") {
        penColor = "red";
    }
}

// Color Events
document.getElementById("redBtn").addEventListener("click", setRed);

function setRed() {
    penColor = "red";
}

document.getElementById("blueBtn").addEventListener("click", setBlue);

function setBlue() {
    penColor = "blue";
}

document.getElementById("greenBtn").addEventListener("click", setGreen);

function setGreen() {
    penColor = "green";
}

document.getElementById("blackBtn").addEventListener("click", setBlack);

function setBlack() {
    penColor = "black";
}

document.getElementById("colorPicker").addEventListener("change", changeColor);

function changeColor() {
    penColor = document.getElementById("colorPicker").value
}