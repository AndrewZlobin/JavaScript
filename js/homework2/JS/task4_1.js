/*Пользователь вводит число, создать массив заданного размера,
вывести элементы массива в обратном порядке*/

let number = parseInt(prompt('Введите число (таков будет размер массива)'));
let arrNumbers = [];
arrNumbers.length = number;
console.log(arrNumbers);
let something = 0;

for (let i = 0; i < arrNumbers.length; i++) {

    arrNumbers[i] = something;
    something += 1;
}
arrNumbers.reverse();
console.log(arrNumbers);
