var addedElements = [document.createElement("div")]
var parent = document.getElementsByClassName("addedContent")[0];
var amount = 0;
var data = document.getElementById("data");
var type = document.getElementsByName("type");
var doccolor = document.getElementById("color").value;
var textmargin = document.getElementsByName("textmargin");
var textWeight = document.getElementsByName("textWeight");
var link = document.getElementById("link");
var currentElement;
var data = document.getElementById("data");
var newType = document.getElementsByName("newType");
//var finalProduct = document.getElementById("finalproduct");

function add() {
    doccolor = document.getElementById("color").value;
    textmargin = document.getElementsByName("textmargin");
    textWeight = document.getElementsByName("textWeight");
    if (data.value != "") {
        amount += 1;
        addedElements[amount] = document.createElement("div")
        parent.appendChild(addedElements[amount]);
        if (type[0].checked) {addedElements[amount].innerHTML = "<li>"+data.value+"</li>";}
        if (type[1].checked) {
            addedElements[amount].innerHTML = "<h1>"+data.value+"</h1>";
            addedElements[amount].style.color = doccolor;
            if (textmargin[0].checked) {addedElements[amount].style.borderLeft = "10px solid "+doccolor;}
            if (textmargin[2].checked) {addedElements[amount].style.borderRight = "10px solid "+doccolor;}
        }
        if (type[2].checked) {addedElements[amount].innerHTML = "<p>"+data.value+"</p>";}
        if (type[3].checked) {addedElements[amount].innerHTML = "<img src='"+data.value+"'>";}
        if (type[4].checked) {
            addedElements[amount].innerHTML = "<a href='"+link.value+"' target='null'>"+data.value+"</a>";
            addedElements[amount].style.color = color;
        }
        if (textmargin[0].checked) {addedElements[amount].style.textAlign = "left";}
        if (textmargin[1].checked) {addedElements[amount].style.textAlign = "center";}
        if (textmargin[2].checked) {addedElements[amount].style.textAlign = "right";}
        if (textWeight[0].checked) {addedElements[amount].style.fontWeight = "bold";}
        if (textWeight[1].checked) {addedElements[amount].style.fontStyle = "italic";}
        if (textWeight[2].checked) {addedElements[amount].style.textDecoration = "underline";}
        addedElements[amount].addEventListener("click", function () {currentElement = this; updateEditValues();}, false);
        //finalProduct.value = "<title>NoteMode</title><style>body {font-family: arial;} h1 {font-size: 75px;}</style>"+parent.innerHTML;
        //data = document.getElementById("data").value = "";
    }
}

function updateEditValues() {
    data.value = currentElement.innerHTML;
    data.value = data.value.replace("<h1>", "");
    data.value = data.value.replace("</h1>", "");
    data.value = data.value.replace("<p>", "");
    data.value = data.value.replace("</p>", "");
    data.value = data.value.replace("<li>", "");
    data.value = data.value.replace("</li>", "");
    document.getElementsByClassName("editObjects")[0].style.display= "block";
}


function editElement(remove) {
    doccolor = document.getElementById("color").value;
    if (type[0].checked) {
        currentElement.style.border = "none";
        currentElement.style.color = "black";
        currentElement.innerHTML = "<li>"+data.value+"</li>";
    }
    if (type[1].checked) {
        currentElement.style.border = "none";
        if (textmargin[0].checked) {currentElement.style.borderLeft = "10px solid "+doccolor;}
        if (textmargin[1].checked) {currentElement.style.border = "none";}
        if (textmargin[2].checked) {currentElement.style.borderRight = "10px solid "+doccolor;}
        currentElement.style.color = doccolor;
        currentElement.innerHTML = "<h1>"+data.value+"</h1>";
    }
    if (type[2].checked) {
        currentElement.style.border = "none";
        currentElement.style.color = "black";
        currentElement.innerHTML = "<p>"+data.value+"</p>";
    }
    if (type[3].checked) {
        currentElement.innerHTML = "<img src='"+data.value+"'>";
    }
    if (textmargin[0].checked) {currentElement.style.textAlign = "left";}
    if (textmargin[1].checked) {currentElement.style.textAlign = "center";}
    if (textmargin[2].checked) {currentElement.style.textAlign = "right";}
    if (textWeight[0].checked) {currentElement.style.fontWeight = "bold";}else {currentElement.style.fontWeight = "normal";}
    if (textWeight[1].checked) {currentElement.style.fontStyle = "italic";}else {currentElement.style.fontStyle = "normal";}
    if (textWeight[2].checked) {currentElement.style.textDecoration = "underline";}else {currentElement.style.textDecoration = "none";}
    if (remove === true) {parent.removeChild(currentElement)}
    document.getElementsByClassName("editObjects")[0].style.display= "none";
    currentElement = null;
}

document.addEventListener("click", function () {
if (type[4].checked) {
    link.style.display = "block";
}else {
    link.style.display = "none";
}
if (type[3].checked) {
    document.getElementById("googleLink").style.display = "block";
}else {
    document.getElementById("googleLink").style.display = "none";
}
}, false)