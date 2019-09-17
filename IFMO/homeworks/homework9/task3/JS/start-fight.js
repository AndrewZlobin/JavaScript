let catNames = ["Мурзик", "Васька", "Феликс",
    "Алиса", "Дайра", "Бездомный",
    "Том", "Дракоша", "Манчестер",
    "Босс"];

function randomStats(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//let item = items[Math.floor(Math.random()*items.length)];
//words[Math.floor(Math.random()*words.length)];

let firstCat = new Cat(catNames[Math.floor(Math.random()*catNames.length)], randomStats(1, 15), randomStats(1, 20), randomStats(1, 30));
let secondCat = new Cat(catNames[Math.floor(Math.random()*catNames.length)], randomStats(1, 15), randomStats(1, 20), randomStats(1, 30));

console.log(firstCat);
console.log(secondCat);

firstCat.fight(secondCat);