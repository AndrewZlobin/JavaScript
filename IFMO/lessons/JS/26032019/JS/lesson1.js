//однострочный комментарий

/*
* многострочный комментарий
* */

// Вывод данных в консоль для отладки
console.log("Выводимая информация");
console.log("Выводимая информация 2");

// переменные (именованная область памяти) в JS

// объявление переменных
var login;
let pwd;
// Константы
const CONST_VALUE = 123;

// присвоим переменной значение

login = "qwe";
pwd = "1234";

// переопределим значение переменной

login = "asd";
pwd = "54Adf3";

console.log (login, pwd);

// let height, width;

let height = 123;
let width = 346;

// типы данных
// число - тип number

height = 23.4;
width = -789;

// строки - тип string

let str = "Строка 1";
let str2 = 'Строка 2';
str = '"Строка"';
str = '\'Строка\'';

//логические - тип boolean

let active = true;
let stopped = false;

console.log (active, stopped);

// null - значение не известно

let unknownValue = null;
console.log (unknownValue);

//undefined - значение не присвоено

let undefinedVal;
console.log (undefinedVal);

// определение типа данных

console.log (typeof height);

let age = '13 лет';
height = '300.65px';

age = parseInt(age);
height = parseFloat(height);


console.log (age, height);
console.log (typeof age, typeof height);

//арифметические операторы
// + - / * % (взятие остатка от деления)

height = 45;
height = height * 2;

console.log (height);

// ЧИСЛА С ДВОИЧНОЙ ТОЧНОСТЬЮ!!!

console.log (3 + 5); // 8
console.log ('3' + 5); // конкатенация, 35
console.log ('строка' + 'еще строка'); // строкаеще строка
console.log (34 / '2'); //преобразование строки в число и вычисление 17
console.log (34 * '2'); //преобразование строки в число и вычисление 68
console.log (34 - '2'); //преобразование строки в число и вычисление 32

console.log (isNaN ("str")); //true
console.log (isNaN ("23")); //false
console.log (isNaN ("23er")); //true
console.log (isNaN (45)); //false
console.log (isNaN (false)); //false
console.log (isNaN (true)); //false

//бесконечность и отрицательная бесконечность

console.log (34/0); //Infinity
console.log (-34/0); //-Infinity

//взятие остатка

console.log (9 % 2); // 1
console.log (8 % 2); // 0
console.log (348 % 10); //10

//число = 64 бита

console.log (Number.MAX_VALUE);
console.log (Number.MIN_VALUE);
console.log (Number.MAX_SAFE_INTEGER);
console.log (Number.MIN_SAFE_INTEGER);

//операторы присваивания
// = += -= *= /= %=

let a = 12;
a += 10; //a = a + 10;
a *= 10; //a = a * 10
a -= 10; //a = a - 10
a /= 10; //a = a / 10
a %= 10; //a = a % 10
console.log (a);

//операторы сравнения
// > < >= <= == === != !==

height = 123;
width = "123";
let num = 500;
login = "asd";
login2 = "fre";

console.log (height > width); //false
console.log (height >= width); //true
console.log (login > login2); //false

console.log (height == width); //true
console.log (height === width); //false

//инкремент (увеличивает значение на 1)
// и декремент (уменьшает значение на 1)
// префиксный инкремент ++i
num = 2;
console.log (++num);
console.log (num);
// префиксный декремент --i
num = 2;
console.log (--num);
console.log (num);
// постфиксный инкремент i++
num = 2;
console.log (num++); //2
console.log (num); //3
// постфиксный декремент i--
num = 2;
console.log (num--);
console.log (num);

num = 7;
let res = num++ - num++ + num++ - --num;
console.log (num)

//тернарный оператор
height = 23;
width = '65px';

//(условие) ? значение1 : значение2

res = (height >= parseInt(width)) ? "высота больше или равна" : "ширина больше";
console.log(res);

let data = prompt("Enter the number");
console.log(data);