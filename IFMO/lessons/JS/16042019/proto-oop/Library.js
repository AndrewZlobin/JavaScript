function Library(libTitle, size) {
    this._libTitle = libTitle;
    this._maxSize = size;
    this._books = [];
}

Library.prototype.addToLibrary = function (book) {
    if (! book instanceof Book) {
        console.log("объект не является объектом Book");
        return;
    }

    if (this._books.length) {
        console.log("нет места для ", book.getTitle());
        return;
    }
    console.log("книг в библиотеке: ", this._books.length);
    console.log("максимум книг в библиотеке: ", this._maxSize);

    this._books.push(book);
};

Library.prototype.showAllBooks = function () {
    if (!this._books.length) {
        console.log("В библиотеке нет книг");
        return;
    }
    for (let i = 0; i < this._books.length; i++) {
        console.log(this._books[i].getTitle(), this._books[i].getPage() + " страниц");
    }
};

let library = new Library("Библиотека", 2);
library.addToLibrary(alphabet);
library.addToLibrary(tails);
library.showAllBooks();
console.log(library);

function OtherLibrary(libTitle, size) {
    Library.call(this, libTitle, size);
}

// наследование OtherLibrary от Library
OtherLibrary.prototype = Object.create(Library.prototype);