/*Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
 будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).*/

console.log("Рекомендуется вводить число от 0 до 999");
let testWord = "товар";

function getDeclension(num) {
    if (num === 0) {
        console.log("Правильно будет: " + num + " " + testWord + "ов");
        return;
    } else if ( num >= 11 && num <=20) {
        console.log("Правильно будет: " + num + " " + testWord + "ов");
        return;
    } else if (num % 10 === 1) {
        console.log("Правильно будет: " + num + " " + testWord);
        return;
    } else if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
        console.log("Правильно будет: " + num + " " + testWord + 'а');
        return;
    } else {
        console.log("Правильно будет: " + num + " " + testWord + "ов");
        return;
    }
}
(getDeclension(999));