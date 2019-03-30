/*Пользователь вводит число, создать массив заданного размера,
вывести элементы массива в обратном порядке*/

let arrNumbers = [];

for (let i = 0; i < 6; i++) {
    let number = prompt('Введите 6 любых чисел');
    let numberToArr = parseInt(number);
    arrNumbers.push(numberToArr);
    console.log(numberToArr);
}
arrNumbers.reverse();
console.log(arrNumbers);

/*Массив собирается и ревертится с надеждой на пользователя, который
* не будет вводить что-либо еще, кроме цифр*/