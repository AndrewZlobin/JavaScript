// if (условие) {
//     код, который выполняетс, если условие true
// }



let checked = true;

if (checked) {
    checked = false
    console.log ("условие true - блок кода выполнился");
}

console.log ("checked:" + checked);

// дополнительный блок else

let age = 45;
if (age < 16) {
    console.log ("Вы не можете зайти на сайт");
} else {
    console.log ("Добро пожаловать");
}

//дополнительные блоки else if

let season = 'summer';

if (season === "summer") {
    document.body.style.background = 'green';
} else if (season === 'winter') {
    document.body.style.background = 'white';
} else if (season === 'autumn') {
    document.body.style.background = 'orange';
} else {
    document.body.style.background = 'yellow';
}

//логические операторы

// && // and
// || // or
// ! // not

let day = "суббота";
if (day === "суббота" || "воскресенье") {
    console.log ("ВЫХОДНЫЕ!");
}

let a = 12;
let b = 56;
let c = 23;

if (c > a && c < b) {
    console.log("c is between a and b");
}


//checked=false
if (!checked) {
    console.log("!checked is" + checked);
}

//оператор выбора


/*switch (выражение) {
    case значение1:
        код;
        [break;]
    case значение2:
        код;
        [break;]
    case значение3:
        код;
        [break;]
    case значение4:
        код;
        [break;]
    case значение5:
        код;
        [break;]
    case значение6:
        код;
        [break;]
    [default:
        код]
}*/

let ticketNumber = '';
switch (ticketNumber) {
    case '111111':
        console.log("big prize");
        break;
    case '222222':
    case '333333':
        console.log("medium prize");
        break;
    case '444444':
    case '555555':
    case '666666':
        console.log("small prize");
        break;
    default:
        console.log ("no prize");
}

// циклы нужны для того, чтобы выполнять однотипные действия несколько раз;
// while с предусловием
let pwd = null;

while (pwd !== 'admin') {
    pwd = prompt ("Введите пароль:");
}


// while с постусловием

// do {
//     тело цикла
// } while (условие)
let z = 4;

do {
    console.log("z= " + z);
    z--;
} while (z);

// for (начало/инициализация; проверка условия; шаг/обновление счетчика) {
//     тело цикла
// }

let attemptCount = 5;
let answer = 456;
for (let i = 1; i <= attemptCount; i++) {
    let data = prompt("Угадайте число!")
    if (parseInt(data) === answer) {
        alert ("Вы угадали");
        break; // директива break позволяет выйти из цикла
        // continue; //(директива continue прерывает текущую итерацию)
    }
    alert('У вас осталось попыток: ' + (attemptCount - i));
}

