var portfolio = document.querySelector('.portfolio__image');
var sliderUl = portfolio.querySelector('ul');
var design = portfolio.querySelectorAll('.slider__design');
var allItems = portfolio.querySelectorAll('.slider__item');
var work = portfolio.querySelectorAll('.slider__work');

var designButton = document.querySelector('.portfolio__design');
var workButton = document.querySelector('.portfolio__work');
var allButton = document.querySelector(".portfolio__all");

var activeButtons = function(evt) {
    var active = document.querySelectorAll('.portfolio__link--active');
    for(var i=0; i<active.length; i++) {
        active[i].classList.remove('portfolio__link--active');
    }
    evt.target.classList.add('portfolio__link--active');
};

designButton.addEventListener('click', function(evt){
    evt.preventDefault();
    $portfolioSlider.owlCarousel('destroy'); // destroyed
    while (sliderUl.firstChild) {
        sliderUl.removeChild(sliderUl.firstChild);
    }
    for(var i=allItems.length - 1; i>= 0; i--){
        if(allItems[i].classList.contains('slider__design')) {
            sliderUl.appendChild(allItems[i]);
        }
    }
    $portfolioSlider.owlCarousel(portfolioOptions);
    activeButtons(evt);
});

workButton.addEventListener('click', function(evt){
    evt.preventDefault();
    $portfolioSlider.owlCarousel('destroy'); // destroyed
    while (sliderUl.firstChild) {
        sliderUl.removeChild(sliderUl.firstChild);
    }
    for(var i=allItems.length - 1; i>= 0; i--){
        if(allItems[i].classList.contains('slider__work')) {
            sliderUl.appendChild(allItems[i]);
        }
    }
    $portfolioSlider.owlCarousel(portfolioOptions);
    activeButtons(evt);

});

allButton.addEventListener('click', function(evt){
    evt.preventDefault();
    $portfolioSlider.owlCarousel('destroy'); // destroyed
    while (sliderUl.firstChild) {
        sliderUl.removeChild(sliderUl.firstChild);
    }
    for(var i=allItems.length - 1; i>= 0; i--){
        sliderUl.appendChild(allItems[i]);
    }
    $portfolioSlider.owlCarousel(portfolioOptions);
    activeButtons(evt);
});