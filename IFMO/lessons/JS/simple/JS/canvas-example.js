let canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 900;
canvas.height = 600;

let context = canvas.getContext("2d");
context.fillStyle = 'green';
context.fillRect(0, 0, 900, 600);

let catImg = new Image();
catImg.src = 'img/hamburger.png';
catImg.onload = function () {
    context.drawImage(catImg, 22, 15, 100, 100);
};

let x = 22;
let y = 15;
document.addEventListener("keypress", movePic);
function movePic(event) {
    console.log(event);
    // context.fillStyle = 'green';
    // context.fillRect(x, y, 100, 100);
    if (event.code === "KeyD") {
        x += 3;
        console.log(event.code);
    }else if (event.code === "KeyA") {
        x -= 3;
    }else if (event.code === "KeyS") {
        y += 3;
    }else if (event.code === "KeyW") {
        y -= 3;
    }else if (event.code === "KeyS" || event.code === "KeyD") {
        x += 3;
        y += 3;
    }

    //x += 3;
    // y += 3;
    context.drawImage(catImg, x, y, 100, 100);
    console.log(event.key);
}


//Класс Юнит с наследованием для игрока и врага
//Класс Отрисовщик для рисования
//Класс Затирщик для затирания и обновления