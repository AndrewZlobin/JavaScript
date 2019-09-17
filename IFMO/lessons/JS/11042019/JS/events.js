let titleElems = document.querySelectorAll(".article p:first-child");

for (let i = 0; i < titleElems.length; i++) {
    titleElems[i].addEventListener('click', openDescription);
}
function openDescription() {
    console.log("элемент, на который повешен обработчик события", this);
    console.log("его соседний элемент справа", this.nextElementSibling);
    this.nextElementSibling.classList.toggle("open");
}

//

function getPresents() {
    return {
        car: "Машина",
        dog: "Собака",
        cat: "Кошка",
        book: "Книга",
        game: "Игра",
        bicycle: "Велосипед"
    }
}

let presentContainer = document.getElementById("present_container");

presentContainer.addEventListener("click", showPresent);

function showPresent(event) {
    console.log("информация о событии: ", event);

    let clickElem = event.target; // элемент, на котором сработал click
    console.log("элемент, на котором сработал click: ", clickElem);

    //значение атрибута data для элемента, на котором сработал клик
    let present = clickElem.dataset.present;

    if (present) {
        let presents = getPresents();
        clickElem.innerText = presents[present];
        clickElem.classList.add('present');

        //удалить обработчик события
        this.removeEventListener("click", showPresent);
    }
}

//

window.addEventListener("scroll", fixedMenu);

let fixedBlock = document.getElementById("fixed");
let fixedBlockOffset = fixedBlock.offsetTop;
console.log(fixedBlockOffset);

function fixedMenu() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > fixedBlockOffset) {
        fixedBlock.classList.add('fixed');
    } else {
        fixedBlock.classList.remove("fixed");
    }
}
