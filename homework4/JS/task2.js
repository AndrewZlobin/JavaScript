/*Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы.
Написать функцию, которая реализует следующий функционал:
требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив.
 Например, если дана строка "дом 48, корпус 9, парадная 7, этаж 4",
 то в массиве должны оказаться числа 48, 9, 7 и 4*/

let str = "дом 48, корпус 9, парадная 7, этаж 4";
console.log(str);

let array = str.split(" ");

console.log(array);
let regular = /\D+/ig;
let answer = str.replace(regular, ",");

console.log(answer);



/*    var r, re,s;
s='stange 15 new'
re = /\D+/ig;
r = s.replace(re, '');
document.write(r);*/