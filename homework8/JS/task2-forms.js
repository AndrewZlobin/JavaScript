let form = document.forms.homework;
let colorRadio = form.elements.radiocolor;
console.log(colorRadio);

//Измение цвета фона при нажатии на радиокнопку

form.addEventListener("click", changeColorOfFieldset);

function changeColorOfFieldset() {
    document.getElementsByName("radiocolor").checked = true;
    form.elements.checkbox_fieldset.style.background = colorRadio.value;
}

//Отображение выбранных ЯП в консоли
form.addEventListener("click", addProgLangsToConsole);

function addProgLangsToConsole() {
    let choosedProgLangs = document.getElementsByName("proglang[]");
    let arrOfProgLangs = [];

    for (let i = 0; i < choosedProgLangs.length; i++) {
        if (choosedProgLangs[i].checked) {
            arrOfProgLangs.push(choosedProgLangs[i].value);
            //console.log('выбрано следующее: ', choosedProgLangs[i].value);
        }
    }
    //console.log("предположительно выбрано: ", arrOfProgLangs);
    let progLangsInStrings = arrOfProgLangs.toString();
    console.log('Выбраны следущие языки программирования', progLangsInStrings);
    return progLangsInStrings;
}

//После клика на чекбокс поле становится активным

form.addEventListener('click', turnUnDisabled);

function turnUnDisabled() {
    let turnDisabled = document.getElementsByName("turndisabled");
    turnDisabled.checked = false;
    console.log(turnDisabled);
    console.log(turnDisabled.checked);
    console.log(!(turnDisabled.checked));
     if (!(turnDisabled)) {
         let textarea = document.getElementsByName('textarea');
         textarea.disabled = false;
         console.log(textarea);
     }
     if (turnDisabled.checked === false) {
         document.getElementsByName('textarea').disabled = false;
     }
}

