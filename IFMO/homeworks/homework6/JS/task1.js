let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "piano.jpeg"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "guitar.jpeg"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "drums.jpg"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "flute.jpg"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "harp.jpg"
    }
};

//console.log(goods);

function createHTML(obj) {
    for (let key in obj) {
        //console.log(obj[key].title);

        let title = document.createElement("h2");
        title.innerText = obj[key].title;
        title.classList.add("header");

        console.log(title);

        //console.log(obj[key].img);

        let img = document.createElement("img");
        img.setAttribute("src", "img/" + obj[key].img);
        img.classList.add("image");
        //console.log(img);

        //console.log(obj[key].price);
        let price = document.createElement("p");
        price.innerText = obj[key].price;
        price.classList.add("footer");
        //console.log(price);

        let div = document.createElement("div");
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(price);

        let goodsDiv = document.getElementById("goods");
        goodsDiv.appendChild(div);
    }
}

//console.log(title.classList.contains("header"));

createHTML(goods);