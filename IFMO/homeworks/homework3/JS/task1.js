/*Написать функцию сравнения двух массивов.
Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны.*/

let someArr1 = [1,2,3];
let someArr2 = [1,2,4];

function arrayToCompare(arrOne, arrTwo) {
    if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
        console.log("Нет одного массива\n Или массивов нет вообще!");
        return false;
    }

    if (arrOne.length !== arrTwo.length) {
        console.log("Длины массивов не совпадают!");
        return false;
    }



     for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            console.log("Массивы не совпадают!");
            return false;
        }

    }
    console.log("Массивы совпадают!");
    return true;
}

arrayToCompare(someArr1, someArr2);