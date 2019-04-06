/*Написать функцию addToCart(obj, title, countToCart) {} ,
где obj - объект, title - название товара, count - количество товара, которое нужно добавить в корзину.
Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество товара на countToCart,
если не позволяет, то выводит информацию об этом в консоль и завершает работу.
Для проверки функции используйте объект goods из файла с урока.*/

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function addToCart(obj, title, countToCart) {
    title = prompt("Введите название товара");
    countToCart = prompt("Введите количество требуемого товара");
    let objectInObject;
    for (let mainPropName in obj) {
        objectInObject = obj[mainPropName];
        if (objectInObject.count <= 0) {
            alert("Товар закончился, ожидаем поставки"); //для себя
            return false;
        }
        if (objectInObject.title === title) {
            if (objectInObject.count < countToCart) {
                alert("В таком количестве товар отсутствует, иммется только\n" + objectInObject.count + " единиц товара " + objectInObject.title);
            } else {
                alert("Товар под названием \n" + objectInObject.title + "\nдобавлен в корзину в количестве\n" + countToCart);
                obj[mainPropName].count -= countToCart;
                alert ("Товара: " + objectInObject.title + "\nосталось на складе: " + obj[mainPropName].count);
                return obj[mainPropName];
            }
        }
    }
}

console.log(addToCart(goods, "Арфа", 4));