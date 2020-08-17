//Header slider
let slides = document.querySelectorAll(".slider__slide");
let tabsBtn = document.querySelectorAll(".slider__btn");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function(e){
        e.preventDefault();
        for (const btn of tabsBtn){
            btn.classList.remove("active");
        }
        this.classList.add("active");
        let tabId = this.dataset.tab;
        let tebElem = document.querySelector(`#${tabId}`);
        for (const slide of slides) {
            slide.classList.remove("active");
        }
        tebElem.classList.add("active");
    })
});

//Gallery
let healthImages = document.querySelectorAll(".health-slider img");
let healthBtnPrev = document.querySelector(".health-slider__btn-prev");
let healthBtnNext = document.querySelector(".health-slider__btn-next");
let i = 0;

healthBtnNext.addEventListener("click", function(){
    healthImages[i].classList.remove("opacity");
    i++;
	if (i >= healthImages.length) {
		i = 0;
	}

    healthImages[i].classList.add("opacity");
});

healthBtnPrev.addEventListener("click", function(){
    healthImages[i].classList.remove("opacity");
	i--;

	if(i < 0) {
		i =  healthImages.length - 1;
    }
    healthImages[i].classList.add("opacity");
});

//Menu
let hamburger = document.querySelector(".hamburger");
let siteNav = document.querySelector(".site-nav");

hamburger.addEventListener("click", function(e){
    e.preventDefault();
    siteNav.classList.toggle("active");
});


