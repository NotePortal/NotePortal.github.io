var mouse = {
    x: 0,
    y: 0,
    state: false
}

var apps = document.getElementById("windows");
window.addEventListener("mousedown", function () {mouse.state = true;}, false);
window.addEventListener("mouseup", function () {mouse.state = false;}, false);
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

function newWindow(name, source) {
    apps.innerHTML += "<div onmousemove='move(this);'><button onclick='closeApp(this.parentElement);' draggable='false'>╳</button><p draggable='false'>"+name+"</p><iframe src='"+source+"'></iframe></div>";
};
function move(el) {
    if (mouse.state === true) {
        el.style.zIndex = 1000;
        el.style.margin = (mouse.y/3)+"px"+" "+(mouse.x/3)+"px";
    };
}
function closeApp(el) {
    windows.removeChild(el);
}

var clock = new Date();

function displayClock() {
    clock = new Date();
    document.getElementsByClassName("clock")[0].innerHTML = clock.getHours()+":"+clock.getMinutes();
    document.getElementsByClassName("clock")[1].innerHTML = clock.getHours()+":"+clock.getMinutes();
    setTimeout(displayClock, 1000);
}
displayClock();