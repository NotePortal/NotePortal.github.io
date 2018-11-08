var message = document.getElementById("message");

Cookies.set("moi");

function send() {
    let compile = message.value.split(" ");
    document.getElementById("conversation").innerHTML += "<div class='user'>"+message.value+"</div><br>";
    message.value = "";
    setTimeout(function () {
        for (let i = 0; i < compile.length; i++) {
            if (compile[i] === "Hey") {document.getElementById("conversation").innerHTML += "<div class='david'>Hello!</div><br>";};
            if (compile[i] === "How"  && compile[i+1] === "are") {document.getElementById("conversation").innerHTML += "<div class='david'>Great, and you?</div><br>";};
            if (compile[i] === "What"  && compile[i+1] === "is" && compile[i+3] === "name") {document.getElementById("conversation").innerHTML += "<div class='david'>David! How do you think your texting to?</div><br>";}
            if (compile[i] === "Good") {document.getElementById("conversation").innerHTML += "<div class='david'>Ok its great that something is good.</div><br>";};
            if (compile[i] === "David") {document.getElementById("conversation").innerHTML += "<div class='david'>What?</div><br>";};
            if (compile[i] === "fuck" || compile[i] === "hell") {
                document.getElementById("conversation").innerHTML += "<div class='david'>I don't want to aswer that...</div><br>";
                document.getElementById("conversation").innerHTML += "<div class='david'>Answer*</div><br>";
            };
        }
    }, parseInt(Math.random() * 1500));
};