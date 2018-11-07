var mouse = {
    x: 0,
    y: 0
}

var windows = document.getElementById("windows");
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}, false);


function newWindow(name, source) {
    windows.innerHTML += "<div draggable='true'><button onclick='closeApp(this.parentElement);'>X</button><div style='width: 1000px; height: 50px' onmousemove='move(this.parentElement);'></div><p>"+name+"</p><iframe src='"+source+"'></iframe></div>";
};
function move(el) {
    el.style.zIndex = 1000;
    el.style.margin = (mouse.y-30)+"px"+" "+(mouse.x-100)+"px";
}
function closeApp(el) {
    windows.removeChild(el);
}