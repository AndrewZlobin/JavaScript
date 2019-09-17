// DOM дерево

console.log(document); // весь html-документ целиком
console.log(document.body); //вывод body html - документа в консоль


// для каждого эдемента можно получить:

// elem.childNodes

let elem = document.getElementById("list");
console.log(elem);

console.log(elem.childNodes); // получение всех узлов

console.log(elem.children); //получение узлов html тэгов

console.log(elem.firstChild); // получение первого дочернего узла
console.log(elem.lastChild); // получение последнего дочернего узла

console.log(elem.firstElementChild); //первый дочерний тэг узел
console.log(elem.lastElementChild); //последгий дочерний тэг узел

console.log(elem.previousSibling); // предыдущий узел В ELEM
console.log((elem.nextSibling)); // следующий узел В ELEM

console.log(elem.previousElementSibling); // предыдущий узел-тэг ДО elem
console.log(elem.nextElementSibling); // следующий узел-тэг ПОСЛЕ elem

console.log(elem.parentNode); // получение родительского узла
console.log(elem.parentElement); // получение родительского узла-тэга

// Поиск существущих элементов в DOM
//1.Получение элемента по id (id должны быть уникальными)

let list = document.getElementById("list");
console.log(list);

// 2.Получение элемента по атрибуту name

let elementByName = document.getElementsByName("data");
console.log(elementByName);
console.log(elementByName[0]);

// 3.Получение элемента по имени тэга

let liTag = document.getElementsByTagName("li");
console.log(liTag);
console.log(liTag[2]);

// 4.Получение элемента по имени класса

let elementByClass = document.getElementsByClassName("some-class");
console.log(elementByClass);

// 5.Получение элемента по CSS селектору
let ulLi = document.querySelector("ul>li"); // вернет только один, первый найденный элемент
console.log(ulLi);

let queryAll = document.querySelectorAll("input[type=text]"); // вернет все элементы, удовл. CSS селектору
console.log(queryAll);

//создание элементов из js и добавление в html

let ul = document.createElement("ul"); //создание элемента методом
console.log(ul);
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let text = document.createTextNode("Элемент"); // слздание текстового узла

// работа с атрибутами

//проверить наличие атрибута у тэга
console.log(ul.hasAttribute("id"));

// установить атрибут и значение атрибута
ul.setAttribute("id", "js_ul");

//получить значение атрибута
console.log(ul.getAttribute("id"));

//атрибут style (когда нет возможности обратиться к стилям)

ul.style.background = "green";

//работа с классами (CSS)

// обращение к CSS классу, созданному ранее
ul.classList.add("class-name");

// удаление класса с элемента
ul.classList.remove("class-name");

//добавление указаннного класса, если он есть, и удаление, если он есть
ul.classList.toggle("class-name");

// проверка наличия класса у элемента
ul.classList.contains("class-list");

//добавление элементов

li1.appendChild(text);
li2.appendChild(document.createTextNode("TEXT 2"));
li3.appendChild(document.createTextNode("TEXT 3"));

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

let nav = document.getElementById("nav");
nav.appendChild(ul);

// innerHTML - создание нового HTML с "затиранием" всего, что было до этого

//document.body.innerHTML = "<h2>Заголовок</h2>";

// nav.innerHTML = "<ul><li>Elem 1</li><li>Elem 2</li></ul>"; //тип данных - строка
//
// console.log(nav.innerHTML); // тип данных - строка


// через цикл не затирается, а добавляется
// for (let i = 0; i < 3; i++) {
//     document.body.innerHTML += "<p>Text</p>"
// }


let div = document.createElement("div");
div.innerHTML = "<p>NewText</p>";

//добавление элемента справа
nav.insertBefore(div, ul);

//удаление элемента
nav.removeChild(div);

//замена элемента
//elem.replaceChild(new_elem, old_elem);



//для работы с таблицами
let allTable = document.getElementsByTagName("table");

let table = allTable[0];

table.setAttribute("border", "1");

let caption = table.createCaption();
caption.innerHTML = "Caption";

//вставка ряда
let row = table.insertRow(0);

let cell1 = row.insertCell(0);
let cellOther = row.insertCell(1);

cell1.appendChild(ul);
cellOther.innerText = "Cell 2";




