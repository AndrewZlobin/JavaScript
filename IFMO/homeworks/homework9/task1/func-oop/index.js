let alphabet = new Book(); //создание объекта
alphabet.setTitle("Алфавит");
alphabet.setPage(23);

let tails = new Book();
tails.setTitle("Сказки");
tails.setPage(145);

let someBook = new Book();
someBook.setTitle("Книга");
someBook.setPage(95);

let library = new Library("Библиотека", 3);
library.addToLibrary(someBook);
library.addToLibrary(alphabet);
library.addToLibrary(tails);
library.showAllBooks();
library.getBook("Проповедь");

//console.log(library);