let cat1 = new Cat();
cat1.setName("Кот Феликс");
cat1.setAge(4);
cat1.setWeight(5);
cat1.setStr(2);
//
// let cat2 = new Cat();
// cat2.setName("Барон Вискас");
// cat2.setAge(1);
// cat2.setWeight(7);
// //
// let cat3 = new Cat();
// cat3.setName("Принцесса");
// cat3.setAge(8);
// cat3.setWeight(150);
//
let cat4 = new Cat();
cat4.setName("Мистер Лапкин");
cat4.setAge(5);
cat4.setWeight(3);
cat4.setStr(7);
//
// let cat5 = new Cat();
// cat5.setName("КБ");
// cat5.setAge(6);
// cat5.setWeight(6);

////////

console.log(cat1);
// console.log(cat2);
// console.log(cat3);
console.log(cat4);
// console.log(cat5);

let randomRound = new FightEngine("CatUnity", "0.2", 2);
randomRound.catsToFight(cat1);
// randomRound.catsToFight(cat2);
// randomRound.catsToFight(cat3);
randomRound.catsToFight(cat4);
// randomRound.catsToFight(cat5);

randomRound.fightResults();

console.log(randomRound);