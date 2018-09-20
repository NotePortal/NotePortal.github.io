var c = document.getElementById("c");

c.width= 400;
c.height = 20;

c = c.getContext("2d");
var x = -10;
var speed = 1;
c.fillStyle = "blueviolet";
var loadingScreen = document.getElementsByClassName("loadingScreen")[0];
function load() {
    x += 1;
    c.fillRect(x, 0, 1, 100);
    if (x > 600) {loadingScreen.style.display = "none"};
    if (x > 100) {speed = Math.random() * 40};
    if (x > 250) {speed = Math.random() * 20};
    if (x > 300) {speed = Math.random() * 50};
    if (x > 325) {speed = Math.random() * 25};
    if (x > 350) {speed = Math.random() * 10};
    if (x > 400) {speed = Math.random() * 5};
    setTimeout(load, speed);
}
setTimeout(load, 500);