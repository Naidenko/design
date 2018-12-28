var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__close");
var form = document.querySelector(".feedback__form");

form.addEventListener("submit",function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    form.reset();
});
