var slides = document.querySelectorAll(".slider__slide");
var ButtonNext = document.querySelector(".slider__btn-next");
var ButtonBack = document.querySelector(".slider__btn-prev");

var i = 0;

ButtonBack.addEventListener("click", function(evt) {
    evt.preventDefault();
    ButtonBack.classList.add("active");
    ButtonNext.classList.remove("active");
    slides[i].classList.add("active");
    i++;
    slides[i].classList.remove("active");
    i--;
});

ButtonNext.addEventListener("click", function(evt) {
    evt.preventDefault();
    ButtonNext.classList.add("active");
    ButtonBack.classList.remove("active");
    i++;
    slides[i].classList.add("active");
    i--;
    slides[i].classList.remove("active");
});

var healthImages = document.querySelectorAll(".health-slider img");
var healthBtnPrev = document.querySelector(".health-slider__btn-prev");
var healthBtnNext = document.querySelector(".health-slider__btn-next");

healthBtnNext.onclick =  function() {
    healthImages[i].classList.remove("opacity");
    i++;
	if (i >= healthImages.length) {
		i = 0;
	}

    healthImages[i].classList.add("opacity");
}
healthBtnPrev.onclick = function() {
    healthImages[i].classList.remove("opacity");
	i--;

	if(i < 0) {
		i =  healthImages.length - 1;
    }
    healthImages[i].classList.add("opacity");
}

