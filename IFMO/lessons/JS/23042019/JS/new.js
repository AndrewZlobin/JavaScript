$(function () {
    'use strict';
    console.log("document ready");

    //jQuery(поиск/создание элемента) //получаем элементы
    // .method1(стили) // применяем стили (к примеру)
    // .method2(атрибуты) //добавили атрибуты
    // .method3() // вставили текст
    // .size() // получили размер


    //поиск элементов по CSS селекторам
    jQuery("#menu"); //селектор id в jQuery
    jQuery(".empty"); // селектор класса
    jQuery("ul > li"); // дочерний селектор

    console.log(jQuery("#menu"));
    let elems = jQuery("nav").children();
    console.log(elems);

    elems = jQuery("ul")
        .find('a')
        .css("color", "red")
        .css({
            fontSize: "20pt",
            background: "lightblue"
        })
        .end();
});