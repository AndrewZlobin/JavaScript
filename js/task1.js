console.log ("Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь. Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.");

let height = 15;
let width = 5;
let length = 10;

//Зададим переменную для площади параллелепипеда, посчитаем её и выведем в консоль

let cuboidSquare;
cuboidSquare = 2 * (height * width + width * length + height * length); // 550
console.log ("Площадь параллелепипеда равна " + cuboidSquare);

//Узнаем, что больше - ширина или высота у параллелепипеда

let edgeComparison =(parseInt(height) >= parseInt(width)) ? "Высота больше Ширины или равна ей" : "Ширина больше Высоты";
console.log("Результат сравнения высоты и ширины параллелепипеда: " + edgeComparison);

console.log ("На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?");

//1 сотка равна 100м2. Переведем площадь участка в м2.
let gardenSquare = '10 sotka';
gardenSquare = parseInt(gardenSquare);
gardenSquare *= 100;
gardenSquare = parseInt(gardenSquare);
console.log ("Площадь участка: " + gardenSquare + " квадратных метров");

//Посчитаем площадь грядки
let gardenBedSquare = 15 * 25;
console.log ("Одна грядка занимает " + gardenBedSquare + " квадратных метров")

//Найдем максимальное количество грядок.

let maximumGardenBedSquare = gardenSquare / gardenBedSquare;
console.log ("Грядок можно разместить на участке: " + parseInt(maximumGardenBedSquare));

//Найдем общую площадь, занимаемую всеми грядками

let sumGardenBedSquare = gardenBedSquare * (parseInt(maximumGardenBedSquare));

//Найдем оставшуюся свободную площадь на участке

let leftSpace = gardenSquare - sumGardenBedSquare
console.log ("Свободных квадратных метров осталось на участке: " + leftSpace);

console.log ("Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.");

//Переведем овал с площадь 15 дм2 в см2
let ellipseBig = 15 * 100;

//Объявим площадь малого овала
let ellipseSmall = 600;

//Вычтем площадь меньшего овала из площади большего
let ellipseSquare = ellipseBig - ellipseSmall;
console.log ("Площадь овального кольца: " + ellipseSquare + " квадратных сантиметров");

console.log ("Переопределить значения переменных X и Y так, чтобы значение X оказалось меньшим, а Y — большим.");
//Зададим переменные X и Y
variableX = 15;
variableY = 200;
console.log ("Переменная X сейчас имеет значение " + variableX + ", а переменная Y имеет значение " + variableY);

//Поменяем значения местами

variableX = 200;
variableY = 15;
console.log ("Теперь переменная X приняла значение " + variableX + ", а переменная Y приняла значение " + variableY);

console.log ("Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.");

//Объявим переменные
let m = 11.45;
let n = 8.5;

//Объявим переменную для сравнения и присвоим ей значение 10
let matching = 10;

//С помощью модуля обойдем проблему с отрицательными числа (для последующего сравнения)
let absoluteM = Math.abs (m - matching);
let absoluteN = Math.abs (n - matching);

//С помощью тернарного оператора проведем сравнение
let absoluteRedefinition = (absoluteM == absoluteN) ? "Обе переменные равноудалены от 10" : (absoluteM > absoluteN) ? "M" : "N";
console.log ("Ближайщее переменная к 10: " + absoluteRedefinition);