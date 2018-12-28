var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__menu-toggle');
var logo = document.querySelector('.page-header__container');

navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener( 'click', function () {
    if(navMain.classList.contains('main-nav--closed')){
        navMain.classList.remove('main-nav--closed');
        logo.classList.remove('page-header--closed');
        logo.classList.add('page-header--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        logo.classList.remove('page-header--opened');
        logo.classList.add('page-header--closed');
    }
});
