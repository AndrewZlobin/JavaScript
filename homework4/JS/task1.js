/*Написать функцию поиска в строке указанной подстроки и замены ее на новую.
Строку, ее подстроку для замены и новую подстроку вводит пользователь.*/


let stringToEnter = prompt("Введите строку, которая является...строкой");
console.log(stringToEnter);
let oldUnderString = prompt("Теперь введите строку, которая является...подстрокой строки, которую Вы ввели ранее");
let newUnderString = prompt("А теперь введите подстроку для замены");

stringToEnter.toLowerCase();
oldUnderString.toLowerCase();
newUnderString.toLowerCase();


let changeUnderStringToNew = function (string, input, output) {
    if (!string || !input || !output) {
        return false;
    }

    string = string.replace(input, output);

    return string;
};

console.log(changeUnderStringToNew(stringToEnter, oldUnderString, newUnderString));
