/*Напишите функцию, которая отсортирует массив объектов books по значению свойства title.
Объект в файле с занятия.*/

let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];


function sortBooks(arr) {
    arr.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    return arr;
}



console.log(sortBooks(books));
