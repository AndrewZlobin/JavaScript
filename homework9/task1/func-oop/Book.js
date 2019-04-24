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
