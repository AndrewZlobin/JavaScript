function Library(title, size) {
    let libTitle = title;

    let maxSize = size;

    let books = [];

    //методы
    this.addToLibrary = function (book) {
        if (! book instanceof Book) {
            console.log("объект не является объектом Book");
            return;
        }

         if (books.length === maxSize) {
             console.log("нет места");
             return;
         }
        console.log("книг в библиотеке: ", books.length);
        console.log("максимум книг в библиотеке: ", maxSize);

        books.push(book);

    };

    this.showAllBooks = function () {
        //console.log(books);
        if (books.length === 0) {
            console.log("В библиотеке нет книг");
            return;
        }
        for (let i = 0; i < books.length; i++) {
            console.log(books[i].getTitle(), books[i].getPage() + " страниц");
        }
    }
}

let alphabet = new Book(); //создание объекта
alphabet.setTitle("Алфавит");
alphabet.setPage(23);

let tails = new Book();
tails.setTitle("Сказки");
tails.setPage(145);

let someBook = new Book();
someBook.setTitle("Книга");
someBook.setPage(95);

let library = new Library("Библиотека", 2);
library.addToLibrary(someBook);
library.addToLibrary(alphabet);
library.addToLibrary(tails);
library.showAllBooks();
console.log(library);