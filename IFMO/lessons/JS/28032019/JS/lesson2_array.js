// массивы

let arr = [];
let lessons = ['история', 'химия', 'математика'];
console.log(lessons);
// доступ к элементам массива
// осуществляется по индексу

console.log(lessons [0]);
console.log(lessons [1]);
console.log(lessons [2]);
console.log(lessons [3]); //undefined

// изменить элементы массива

lessons[1] = "литература";
console.log(lessons);

//добавление элементов в массив

lessons[89] = "русский язык";
console.log(lessons);

// узнать длину массива

let lessonsLength = lessons.length;
console.log(lessonsLength);

// перебор массива

lessons = ['история', 'химия', 'математика'];
for (let i = 0; i < lessons.length; i++) {
    console.log("Lesson :", lessons[i]);
}

let pics = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];

for (let i=0; i <pics.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', 'img/' + pics[i]);

    document.getElementById('pictures').appendChild(img);
}

//методы

let lastElem = lessons.pop(); // удаляет и возвращает последний элемент массива
lessons.push("физкультура"); // добавляет элемент(ы) в конец массив;

let lastElem2 = lessons.shift(); // удаляет и возвращает первый элемент;
lessons.unshift("физика"); // добавляет элемент(ы) в начало массива

lessons.includes("литература"); //проверка массива на наличие элемента (возвращает true или false)