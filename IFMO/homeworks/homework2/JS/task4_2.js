/*Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128*/

let startNumber = 1;
let i = 0;
while (i < 20) {
    startNumber *= 2;
    i++;
    console.log(startNumber);
}

/*
for (let i = 0; i <= 20; i++) {
    let square = i**2;
    console.log(square);
}*/
