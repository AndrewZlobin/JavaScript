/*
Даны три числа. Определите, можно ли из отрезков с такими длинами составить треугольник.
Определите вид треугольника (прямоугольный, тупоугольный, остроугольный), если он существует.*/

let triangle = [3, 4, 5];
triangle.sort();
console.log(triangle);

if (triangle[0] + triangle[1] > triangle[2]) {
    console.log(triangle[0] + triangle[1] < triangle[2]);
    console.log("Что-то не так, такого треугольника быть не может!");
} else {
    console.log(triangle[0] + triangle[1] < triangle[2]);

    let big = (triangle[0] ** 2) + (triangle[1] ** 2);
    console.log(big);
    let small = (triangle[2] ** 2);
    console.log(small);

    if (big < small) {
        console.log('Тупоугольный');
    } else if (big > small) {
        console.log('Остроугольный');
    } else {
        console.log('Прямоугольный');
    }
}


/*Правда, в данной ситуации сравнение
* элементов массива не всегда проходит верно*/

//Зададим стороны треугольника и косинус угла а



//Определим, может ли такой треугольник "существовать"
//
// if (a + b > c && b + c > a && a + c > b) {
//     console.log("Треугольник существует!");
// } else {
//     console.log("Что-то не так, такого трекгольника быть не может!");
// }
//
// //Определяем вид треугольника
//
// if (a === b && b === c && c === a) {
//     console.log("Треугольник равносторонний!");
// } else if ((a === b && b === c) || (b === c && a === c) || (a === c && b === c)) {
//     console.log("Треугольник равнобедренный!");
// } else {
//     console.log("Треугольник прямоугольный!");
// }