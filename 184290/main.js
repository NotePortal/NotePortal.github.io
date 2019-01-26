navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
|| navigator.msGetUserMedia || navigator.oGetUserMedia;


if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true, audio: false}, handleVideo, videoError);
};
function handleVideo(stream) {
    document.querySelector("#video").src = window.URL.createObjectURL(stream);
};
function videoError(e) {
    alert("Problems with access to 'Camera': "+e);
};