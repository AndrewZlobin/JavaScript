(function () {
    'use strict';

    let str1 = "Строка в двойных кавычках";
    let str2 = 'Строка в одинарных кавычках';
    console.log(str1);
    console.log(str2);

    let str3 = "'Строка с отображением кавычек'";
    console.log(str3);

    let str4 = "строка \n \"в кавычках\"";
    console.log(str4);

    // смена регистра символов строки
    console.log(str1.toLowerCase());
    console.log(str2.toUpperCase());
    console.log(str1.startsWith("Строка"));
    console.log(str1.endsWith("Авап"));

    console.log(str2.repeat(9));

    str1 = 'Стро';
    str2 = 'Ст';

    console.log(str1.localeCompare(str2));
    // 0 - строки равны
    // -1 - первая строка меньше второй
    // 1 - первая строка больше второй

    let age = 34;
    let name = "Alex";
    //es6
    console.log(`Имя пользоватея ${name}, Возраст пользователя ${age}`);




}());