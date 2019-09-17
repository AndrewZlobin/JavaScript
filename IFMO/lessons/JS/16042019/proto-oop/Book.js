//прототипно-ориентированное программирование

function Book() {

}

// метод сеттер

Book.prototype.setTitle = function (title) {
    if (title.length < 2) {
        return;
    }
    this._title = title;
};

Book.prototype.setPage = function (pageCount) {
    if (pageCount < 10) {
        return;
    }
    this._page = pageCount;
};

//метод геттер

Book.prototype.getTitle = function () {
    return this._title;
};

Book.prototype.getPage = function() {
    return this._page;
};

let alphabet = new Book(); //создание объекта
alphabet.setTitle("Алфавит");
alphabet.setPage(99);
console.log(alphabet);
console.log(alphabet.getTitle());
console.log(alphabet.getPage());

let tails = new Book();
tails.setTitle("Сказки");
tails.setPage(66);
console.log(tails);
console.log(tails.getTitle());
console.log(tails.getPage());



//дочерняя функция-конструктор (создание)

function ChildBook() {
    
}

//наследование

ChildBook.prototype = Object.create(Book.prototype);


//добавление новых методов
ChildBook.prototype.setAge = function (age) {
    this._age = age;
};

ChildBook.prototype.getAge = function () {
    return this._age;
};

//перелпределение метода родителя

ChildBook.prototype.getTitle = function () {
    //вызов метода родителя
    return "Детская книга " +  Book.prototype.getTitle.call(this);
};

let mashaBears = new ChildBook();
mashaBears.setTitle("Маша и МЕДВЕДИ");
mashaBears.setPage("77");
mashaBears.setAge("4+");
console.log(mashaBears.getTitle());
console.log(mashaBears.getAge());


// let book = new ChildBook();
// book.setTitle();