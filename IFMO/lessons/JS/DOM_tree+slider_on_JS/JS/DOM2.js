let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "object1.jpg"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "object2.jpg"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "object3.jpg"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "parkomat.jpg"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "sborka.jpg"
    }
};

//console.log(goods);

function createHTML(obj) {
    for (let key in obj) {
        //console.log(obj[key].title);

        let title = document.createElement("h2");
        title.innerText = obj[key].title;
        //console.log(title);

        //console.log(obj[key].img);

        let img = document.createElement("img");
        img.setAttribute("src", "img/" + obj[key].img);
        //console.log(img);

        //console.log(obj[key].price);
        let price = document.createElement("p");
        price.innerText = obj[key].price;
        //console.log(price);

        let div = document.createElement("div");
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);

        let goodsDiv = document.getElementById("goods");
        goodsDiv.appendChild(div);
    }
}

createHTML(goods);

//classList.add - ДОБАВИТЬ СТИЛИ

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

//Сделать таблицей!!!!!!