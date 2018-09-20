var type = document.getElementsByName("type");
var parent = document.getElementsByClassName("addedContent")[0];
var questionNumber = 0;


function add() {
    if (type[0].checked) {parent.innerHTML += "<input type='checkbox' disabled><br><br>"}
    if (type[1].checked) {parent.innerHTML += "<input type='radio' disabled><br><br>"}
    if (type[2].checked) {parent.innerHTML += "<input type='text' disabled><br><br>"}
}