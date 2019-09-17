(function () {
  'use strict';

  //объекты как ассоциативные массивы

   // let obj = {};


    //литеральный способ создания объекта как ассоциативного массива

    //let articleArr = [1,"Фотография"];

    let article = {
        id: 1,
        title: "Фотография",
        description: "Описание статьи",
        author: "Петр",
        date: null,
/*      null: "null",
        true: true,
        2: 2,
        undefined: undefined,*/
    };
    console.log(article);

    //получение доступа к свойствам объекта осуществляется с помощью .

    /*имя_объекта.имя_свойства*/

    //доступ к существущему свойтсву

    console.log(article.title); //Фотография
    console.log(article["id"]); //1

    //доступ к несуществующему свойства

    console.log(article.date); //undefined

    //изменить значение свойства

    article.title = "Путешествие";
    console.log(article);

    //добавить новое свойство
    article.date = new Date().toDateString();
    console.log(article);

    //проверка на наличие свойства в объекте
    //1 вариант - плохой
    if (article.img === undefined){
        console.log("В объекте нет свойства img");
    }

    //2 вариант
    if (!("img" in article)) {
        console.log("В объекте нет свойства img");
    }

    //3 вариант

    console.log(article.hasOwnProperty("img"));

    //доступ к свойству объекта через переменную
    let propName = 'title';
    article[propName] = "Автомобили";

    let imgProp = "img";
    article[imgProp] = "car.png";
    console.log(article);

    //перебор объекта

    for (let propName in article) {
        console.log(propName, article[propName]);
    }

    let arr = [49, 56, 57];

    console.log(Object.keys(arr));
    console.log(Object.getOwnPropertyNames(arr));

    console.log(Object.keys(article));
    console.log(Object.getOwnPropertyNames(article));

    let articles = [
        {
            id: 1,
            title: "JS",
            description: "Описание",
            author: "Михаил"
        },
        {
            id: 2,
            title: "PHP",
            description: "Описание",
            author: "Александр"
        },
        {
            id: 3,
            title: "HTML",
            description: "Описание",
            author: "Петр"
        },
        {
            id: 4,
            title: "CSS",
            description: "Описание",
            author: "Василий"
        },
        {
            id: 5,
            title: "MySQL",
            description: "Описание",
            author: "Иннокентий"
        }
    ];


    // Написать функцию, которая принимает на вход массив,
    // имя свойство и значение. Функция возвращает массив со статьями, у которых

    let getData = function(arr, propName, propValue) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][propName] === propValue) {
                resultArr.push(arr[i]);
            }
        }
        console.log(resultArr);
        return resultArr;
    };

    //console.log(articles);
    getData(articles, "id", 1);
    getData(articles, "author", "Петр");
    getData(articles, "title", "MySQL");
    getData(articles, "author", "Гоша");



    let newArticle = {
        // свойство объекта
        id: 5,
        title: "MySQL",
        description: "Описание",
        author: "Иннокентий",
        // метод объекта
        logInfo: function () {
            console.log(`Статья: ${this.id}, "${this.title}" автора ${this.author}`);
        }
    };

    //this - "ссылка на текущий объект"


    //доступ к методам объекта
    //вызов метода logInfo объекта newArticle
    newArticle.logInfo();

    //добавить (переопределить) метод как свойство
    newArticle.logInfo = function () {
        console.log(this); // console.log(article);
    };

    newArticle.logInfo();

    //деструктуаризация es6
    let userData = ["qwe", "r234rs", 56, "Peter"];

    let [login, pwd, age, name] = userData;
    console.log(login, pwd, age, name);

    let [login1,pwd1, ...other1] = userData;
    console.log(login1, pwd1, other1);

    let secondArticle = {
        id1: 5,
        title1: "MySQL",
        description1: "Описание",
        author1: "Иннокентий",
    };

    let {id1, title1, description1, author1} = secondArticle;
    console.log(id1, title1, description1, author1);

    //ДЛЯ ДОМАШНЕГО ЗАДАНИЯ

    let goods = {
        piano: {
            title: "Пианино",
            price: "3000",
            count: 30
        },
    }


}());