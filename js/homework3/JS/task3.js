/*Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].*/

function range(arrStart, arrEnd, arrStep) {
    if (arrStep <= 1) {
        arrStep = 1;
        console.log("Напоминание!\nШаг не может быть меньше одного!\nУкажите другой шаг!");
        return;
    }

    if (typeof arrStep == "undefined") {
        console.log ("Шаг не объявлен!\nПроверьте входные данные!");
        return false;
    }

    if (!arrStart || !arrEnd) {
        console.log("Не задано начало и/или конец диапазона массива");
        return false;
    }

    let testArray = [];
    let numbers = 0;

    for (let i = arrStart; i <= arrEnd; i += arrStep) {
        testArray[numbers] = i;
        numbers++;
    }
    return testArray;
}

console.log(range(1,10,3));