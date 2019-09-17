let slider = {
    init: function (id) {
        this.sliderContainer = document.getElementById(id);
        this.sliderElement = document.createElement("ul");
        // <ul></ul>
        this.sliderElement.classList.add("slider");
        // <ul class="slider"></ul>
        this.sliderContainer.appendChild(this.sliderElement);

        this.slides = []; // массив для li
        this.currentSlide = 0; //текущий слайд (индекс)
    },
    add: function (imgPath, alt) {
        let li = document.createElement("li");
        let image = document.createElement("img");

        image.setAttribute("src", imgPath);
        image.setAttribute("alt", alt);
        // <img src = "" alt = "">
        li.appendChild(image);
        this.sliderElement.appendChild(li);

        this.slides.push(li);
    },

    run: function () { //отображение следующего слайда
        this.nextSlide();
        setInterval(this.nextSlide.bind(this), 4000);
    },

    nextSlide: function () { // логика переключения слайдов

        if (this.currentSlide || this.currentSlide === 0) {
            this.slides[this.currentSlide].classList.remove("active");
            this.currentSlide += 1;
            this.currentSlide = this.currentSlide < this.slides.length ? this.currentSlide : 0;
        }

        //this.currentSlide = this.currentSlide < this.slides.length ? this.currentSlide : 0;

        this.slides[this.currentSlide].classList.add("active");

    }
};

window.sliderInit = slider.init.bind(slider);
window.sliderAdd = slider.add.bind(slider);
window.sliderRun = slider.run.bind(slider);
