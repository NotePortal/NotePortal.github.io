var c = document.getElementById("c");

c.width= 400;
c.height = 20;

c = c.getContext("2d");
var x = -10;
var speed = 1;
c.fillStyle = "blueviolet";
var loadingScreen = document.getElementsByClassName("loadingScreen")[0];
document.getElementsByTagName("title")[0].innerHTML = "NotePortal - Jumping...";
function load() {
    x += 1;
    c.fillRect(x, 0, 1, 100);
    if (x > 600) {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.animationPlayState = "running";
        document.getElementsByTagName("title")[0].innerHTML = "NoteMode";
        setTimeout(function () {loadingScreen.style.display = "none";}, 500);
    }
    if (x > 100) {speed = parseInt(Math.random() * 40)};
    if (x > 250) {speed = parseInt(Math.random() * 20)};
    if (x > 300) {speed = parseInt(Math.random() * 50)};
    if (x > 325) {speed = parseInt(Math.random() * 25)};
    if (x > 350) {speed = parseInt(Math.random() * 10)};
    if (x > 400) {speed = parseInt(Math.random() * 5)};
    setTimeout(load, speed);
}
setTimeout(load, 500);