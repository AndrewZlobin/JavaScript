(function () {
    'use strict';
    // функции - это подпрограммы. Используются для выполнения одних тех же действий в разных частях программы

    let a = 12;
    let b = 22;

    let res = a + b;

    let n = 34;
    let m = 78;

    let res2 = n + m;

// функции - объявление
// именованные функции

    function sum(num1, num2) { //аргументы функции
        //тело функции
        let res = num1 + num2;
        return res; // возвращение значения функции
    }

//вызов именной функции

    res = sum(a, b);
    res2 = sum(n, m);


//значение аргумента по умолчанию
//возможности es6
    function greeting(userName = "User") {
        console.log("Hello, " + userName + "!");
    }

    function greeting2(userName) {
        if (!userName) {
            console.log('Аргумент не передан');
            return
        }
        console.log("Hello, " + userName + "!");
    }

    greeting("Alex");
    greeting("Mike");
    greeting();
    console.log("GREETING WITH NO ARGUMENT");
    greeting2("Alex");
    greeting2("Mike");
    greeting2();


// функция принимает на вход два числа и возвращает минимальное из них

    function getMin(num1, num2) {
        if (!num1 || !num2) {
            console.log("Данные не переданы");
            return;
        }
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            console.log("Данные - не числа");
            return;
        }

        return (num1 < num2) ? num1 : num2;
    }

    let min = getMin(312, 45);
    console.log("min", min);

//Напишите функцию которая принимает на вход массив целых чисел и
// возвращает сумму его элементов

    let array = [1,2,3,14,5];

    function getSumArr(arr) {
        if(!Array.isArray(arr)) {
            console.log("Это не массив!");
            return;
        }
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    let result = getSumArr(array);

    console.log ("Сумма чисел в массиве равна = " + result);


    console.log(window);


    let someStr = 'Строчка';
    let someArr = [1,2,3];

    function changeStr(str) {
        str += "Новая строка";
    }

    function changeArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += 3;
        }
    }

    changeStr(someStr);
    changeArr(someArr);

    console.log(someStr);
    console.log(someArr);


    /*  примитивные типы данных:
    числа
    строки
    булевы перем.
    null
    undefined
    */

    /*  объекты:
    массивы
    функции
    и др.
    */

    let numVar = 3;
    let numVar2 = numVar; //3

    let arr1 = [1,2,3];
    let arr2 = arr1; //[1,2,3]

    numVar = 56;
    console.log(numVar, numVar2); //56 3

    arr1[1] = 22;
    console.log(arr1, arr2); // [1,22,3] [1,22,3]

// нельзя сравнивать объекты (arr1 === arr2)

//создать полную копию массива

    let oldArr = [1,2,3,4];
    let copyArr = oldArr.slice();

//рекурсия
//написать функцию, которая будет выводить в консоль числа от 0 до n в обратном порядке

    function printNums(num) {
        let i = num;
        while (i >= 0) {
            console.log(num);
            i--;
        }
    }

    function printNum(num) {
        if (num >= 0) {
            console.log(num);
            printNum(num-1);
        }
    }

    function sum1(a, b) {
        return a + b;
    }

    function sum2(a, b) {
        console.log(a + b);
    }

    let resSum1 = sum1(2, 4); // 6
    let resSum2 = sum2(2, 4); // undefined

    console.log(resSum1, resSum2);


    //arguments - переменное количество аргументов
    function printUserInfo() {
        //arguments - все аргументы, которые передаются в функцию при вызове
        console.log("arguments" + arguments);

        for (let i = 0; i < arguments.length; i++) {
            console.log("Info:" + arguments[i]);
        }
    }

    printUserInfo("Mike", 56, "+79991112233");


    // возможности es6 (оператор spread ...)
    function printUserInfo2(login, age, ...other_args) {
        console.log(login);
        console.log(age);
        console.log(other_args);
    }

    printUserInfo2("Mike", 56, "+79991112233", "543dfsd");


    function sum3(a, b, c) {
        return a + b + c;
    }

    let numArr = [2,3,5];

    console.log(sum3(...numArr));


    //анонимные функции

    let sumNums = function (a,b) {
        return a+b;
    };

    console.log(sumNums(3,5));

    // стрелочные функции => es6 (анонимные, в одну строку, сохраняются в переменные)

    let substction = (a, b) => a - b;

    console.log(substction(5,2));

    substction = (a, b) => {
        //тело функции
        return a - b; //ОБЯЗАТЕЛЬНО!
    };

    console.log(substction(5,2));


    // напишите функцию, которая принимает на вход функцию и массив
    //и обрабатывает каждый элемент массива переданной функцией

    function sqrt(num) {
        return num * num;
    }

    let someArray = [2,3,4];

    function findTheAnswer(fn, arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = fn(arr[i]);
        }
        return arr;
    }



    console.log(findTheAnswer(sqrt, someArray));


    // методы массивов (создание нового на основе старого и прочее)

    let arrForEach = [12,9,0,-12,-1,-7];

    arrForEach.forEach(function (elem, index, array) {
        array[index] = 89; //доступ к элементам по индексу

        // элементы можно изменить

        console.log("Элемент " + elem + " с индексом " + index);
    });

    console.log(arrForEach);

    //создает новый массив со всеми элементами, прошедшими проверку, задаваемую в функции

    let arrA = [12,9,0,-12,-1,-7];

    /*let filterArr = arrA.filter(function6 (elem, index, array) {
        return (elem < 0 && elem === 0);
    });*/

    let filterArr = arrA.filter((elem, index, array)=>elem<=0);
    console.log(filterArr);


    //создаем новый массив с результатом вызова указанной функции для каждого элемента массива

    let arrM = [12,9,0,-12,-1,-7];
    let mapArr = arrM.map((elem, index, array)=>elem*elem);
    console.log(mapArr);

    // проверка на true/false хотя бы одного элемента массива, заданного в функции
    let arrS = [12,9,0,-12,-1,-7];
    let someResult = arrS.some((elem, index, array)=> elem<0);
    console.log(someResult);


    // проверка на true/false всех элементов массива, заданного в функции

    let arrE = [12,9,0,-12,-1,-7];
    let everyResult = arrE.every((elem, index, array)=>elem > -90);
    console.log(everyResult);

    /*

    (function () {//весь код вставить сюда, чтобы она стала самовызывающейся}(//скобки говорят о вызове функции));

    */
}());



