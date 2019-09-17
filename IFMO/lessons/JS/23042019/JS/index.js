//передаем одному классу в качестве свойства другой класс


class Article {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    showArticleAuthorName(){
        console.log("Автор статьи:", this._title, "-", this._author.name);
    }

}


class Author {
    constructor (name) {
        //this._article = new Article();
        this._name = name;
        //this._age = age
    }

    set name(name) {
        if (name.length < 1){
            return;
        }
        this._name = name;
    }

    get name(){
        return this._name;
    }

}

let author = new Author("Author");
author.name = "Василий";
console.log(author.name);
let article = new Article("article", author);

article.showArticleAuthorName();


//localstorage (локальное хранилище)
let storage = localStorage;

console.log(storage);

//добавить пару ключ-значение в localstorage

storage.setItem("key", "value");

//получить пару по значению

let val = storage.getItem("key");
console.log(val);

// for (let prop in storage) {
//     console.log(prop, storage[prop]);
// }

// удалить значение по ключу

storage.removeItem("key");

//очистить
storage.clear();

//

let data = {
    name: "Alex",
    age: 78
};

storage.setItem("data", data);
console.log(storage);

let dataFromStorage = storage.getItem("data");
console.log(dataFromStorage); //[object Object]

let jsonObj = JSON.stringify(data); // из объекта в строку
console.log(jsonObj);

storage.setItem("jsonObj", jsonObj);

let jsonObjFromStorage = storage.getItem("jsonObj");
console.log(typeof jsonObjFromStorage);
jsonObjFromStorage = JSON.parse(jsonObjFromStorage); //из строки в объект
console.log(typeof jsonObjFromStorage);

let num = 89;
console.log(JSON.stringify(num));
let arr = [1, 2];
console.log(JSON.stringify(arr));
let a = JSON.stringify(arr);
storage.setItem("arr", a);

let arrFromStorage = storage.getItem("arr");
let twoFromArr = JSON.parse(arrFromStorage);
console.log(twoFromArr);