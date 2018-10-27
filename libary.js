var ice = {};

ice.newScene = function (name, parent) {
    document.getElementById(parent).innerHTML += "<canvas id='"+name+"'></canvas>";
};

ice.collide = function (userX, userY, w, h, map) {
        for (var i = 0; i <map.length; i++) {
            if (map[i].type >= 0) {
                if (
                    userX+w*0.90 >= map[i].x && userX+w*0.10 <= map[i].x+map[i].width &&
                    userY+h*0.90 >= map[i].y && userY+h*0.10 <= map[i].y+map[i].width
                ) {
                afterCollision();
            };
        };
    };
};