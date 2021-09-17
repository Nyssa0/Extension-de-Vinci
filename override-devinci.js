var body = document.getElementsByTagName("body")[0];

body.classList.add("override_body");

function random(){
    setInterval(function(){
        body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }, 300)

}

random()