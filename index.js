let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}


$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>180);
});