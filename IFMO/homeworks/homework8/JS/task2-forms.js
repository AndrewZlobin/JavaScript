let form = document.forms.homework;
let colorRadio = form.elements.radiocolor;
console.log(colorRadio);

//Измение цвета фона при нажатии на радиокнопку

form.elements.checkbox_fieldset.addEventListener("click", changeColorOfFieldset);

function changeColorOfFieldset() {
    document.getElementsByName("radiocolor").checked = true;
    form.elements.checkbox_fieldset.style.background = this.value;
    console.log(this);
}

//Отображение выбранных ЯП в консоли
form.elements.checkbox_fieldset.addEventListener("click", addProgLangsToConsole);

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

form.elements.checkbox_fieldset.addEventListener('click', turnUnDisabled);

function turnUnDisabled(event) {
    //супер-короткая запись
    //form.elements.disable.disabled = !this.checked;

    let eventTarget = event.target;
    //console.log(eventTarget);
    let turnDisabled = form.elements.textarea;
    //console.log(turnDisabled);
    if (eventTarget.checked) {
        turnDisabled.removeAttribute("disabled");
    } else {
        turnDisabled.setAttribute("disabled", 'disabled');
    }
}
