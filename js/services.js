services = document.querySelectorAll('.services__item');

var changeContent = function(evt) {
    evt.preventDefault();
    var item = {
        image: evt.target.dataset.imageSrc,
        title: evt.target.dataset.textTitle,
        description: evt.target.dataset.textDescription,
        number: evt.target.dataset.textNumber
    };
    document.querySelector('.services__item-caption').textContent = item.title;
    document.querySelector('.services__item-number').textContent = item.number;
    document.querySelector('.services__item-description').textContent = item.description;
    document.querySelector('.services__picture').src = item.image;

    // найти все елементы с .services__item--active
    // у каждого элемента удалить этот класс
    var active = document.querySelectorAll('.services__item--active');
    for(var i=0; i<active.length; i++) {
        active[i].classList.remove('services__item--active');
    }

    evt.target.classList.add('services__item--active');
};

for (var i=0; i<services.length; i++) {
    services[i].addEventListener("click", changeContent);
}


