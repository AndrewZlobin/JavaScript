//функциональный ООП

//функция-конструктор
function Book() {
    //создание свойства объекта
    let title; // приватное свойство
    let page;


    //второй вариант создания свойства объекта
    //this.publicTitle = 'publicTitle'; //плохой вариант, публичное свойство

    //методы
    //setters
    this.setTitle = function (bookTitle) {
        if (bookTitle.length < 2) {
            return;
        }
        title = bookTitle;
    };

    this.setPage = function (pageCount) {
        if (pageCount < 10) {
            return;
        }
        page = pageCount;
    };

    //getters
    this.getTitle = function () {
        return title;
    };

    this.getPage = function () {
        return page;
    };

}

// let alphabet = new Book(); //создание объекта
// alphabet.setTitle("Алфавит");
// alphabet.setPage(23);
// console.log(alphabet.getTitle());
// console.log(alphabet.getPage());
//
// let tails = new Book();
// tails.setTitle("Сказки");
// tails.setPage(145);
// console.log(tails.getTitle());
// console.log(tails.getPage());