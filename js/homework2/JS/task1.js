/*
Дан массив целых чисел. Числа не отсортированы и могут повторяться.
Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд.
Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. Подумайте над оптимальным вариантом поиска.*/

arrNumbers = [1,5,7,9,1,5,3,3,3,5,7,7,8,2,1,4,6,9];

let i = 0;
let j = 1
let first = arrNumbers[i];
let last = arrNumbers[arrNumbers.length - j];
console.log(first);

while (first !== 3) {
    i++;
}
console.log(first);
while ((first + last) !== 7) {
    i++;
}
while (first === 1 && last === 6) {
    console.log(first, last);
}

/*for (i = 0; i < arrNumbers.length; i++) {
    if ((first + last) !== 7) {
        first++;
        last--;
    } else {
        console.log(first, last);
    }
}*/

