/*Допустим, пользователь вводит названия городов через пробел.
Вы их присваиваете переменной.
Переставьте названия так, чтобы они были упорядочены по алфавиту.*/


let cities = prompt("Введите несколько названий городов. Используйте запятую как разделитель");

let citiesInAlphabet = function (input) {
    if (!input) {
        return false;
    }

    let milestone = input.split(",");
    let correctArray = milestone.sort();
    return correctArray;
};

console.log(citiesInAlphabet(cities));
