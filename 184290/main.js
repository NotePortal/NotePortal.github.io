navigator.getUserMedia = navigator.getUserMedia;

var video = document.querySelector("#video");
var canvas = document.querySelector("#canvas");
var c = canvas.getContext("2d");

if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
};
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
};
function videoError(e) {
    alert("Problems with access to 'Camera': "+e);
    document.getElementById("log").innerHTML = "Problems with access to 'Camera': "+e;
};
console.log(window.console);
function snap() {
    canvas.width = video.width;
    canvas.height = video.height;
    c.drawImage(video, 0, 0,);
    window.requestAnimationFrame(snap);
};
setTimeout(snap, 100);
