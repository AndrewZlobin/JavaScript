/*Дано натуральное число N.
Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).*/

function getSumOfNumerals(N) {
    if (N < 1) {
        return;
    }
    let variable = 0;
    variable += (N%10) + getSumOfNumerals(Math.floor(N/10));
    return variable;

}

console.log("Сумма цифр в числе 3390017 = " + getSumOfNumerals(3390017));