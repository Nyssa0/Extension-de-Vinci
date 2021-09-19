document.getElementsByTagName('body')[0].classList.add('override');

var menuButtons = document.querySelectorAll('.tools a')
for(let i = 0; i < menuButtons.length; i++) {
    let hey = 'button-custom'+i
    menuButtons[i].classList.add(hey);
}

var body = document.getElementsByTagName("body")[0];

body.classList.add("override_body");

function random(){
    setInterval(function(){
        body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }, 300)

}

random()