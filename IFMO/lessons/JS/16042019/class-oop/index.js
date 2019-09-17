
let book = new Book();
book.title = "Книга";
book.page = 45;

let alphabet = new Book();
alphabet.title = "Алфавит";
alphabet.page = 23;

let tails = new Book();
tails.title = "Сказки";
tails.page = 145;

let library = new Library("Библиотека", 2);
library.showAllBooks();
library.addToLibrary(book);
library.addToLibrary(alphabet);
library.addToLibrary(tails);
library.showAllBooks();

console.log(book);
console.log(alphabet);

