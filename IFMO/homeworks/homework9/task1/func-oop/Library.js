function Library(title, size) {
    let libTitle = title;

    let maxSize = size;

    let books = [];



    //методы
    this.addToLibrary = function (book) {
        if (!book instanceof Book) {
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
    };


    this.getBook = function (title) {
        for (let i = 0; i < books.length; i++) {
            if ((books[i].getTitle()) === title){
                console.log("По названию", title, "нашлась следующая книга:\n", books[i].getTitle(), "Количество страниц:", books[i].getPage(), );
                return;
            }
            if ((books[i].getTitle()) !== title) {
                console.log ("Книги с названием", title, "нет в библиотеке!");
                return;
            }

        }

        //console.log(books[0].getTitle() === title);

        // for(let prop in books)
        // {
        //
        //     if(books[prop].title === title)
        //     {
        //         console.log(books[prop].title);
        //         return books[prop];
        //     }
        // }
        // return false;
    }

}
