document.getElementsByTagName('body')[0].classList.add('override');

var menuButtons = document.querySelectorAll('.tools a')
for(let i = 0; i < menuButtons.length; i++) {
    let hey = 'button-custom'+i
    menuButtons[i].classList.add(hey);
}