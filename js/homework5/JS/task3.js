/*Напишите функцию, которая отсортирует массив объектов books по значению свойства title.
Объект в файле с занятия.*/

let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];


function sortArrayByTitle(a, b) {
    // for (let i = 0; i < arr.length; i++) {
        if (a.title < b.title) {
            //arr[i].sort();
            //return arr[i];
            return -1;
        }
        if (a.title > b.title) {
            //return arr[i].author.sort();
            return 1;
        }
        return 0;
    // }
}

console.log(books.sort(sortArrayByTitle));
