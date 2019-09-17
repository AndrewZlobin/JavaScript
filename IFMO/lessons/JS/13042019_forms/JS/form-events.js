// доступ к форме по её значению имени (name)
let form = document.forms.lesson;
console.log(form);

// получение элементов формы по значению атрибута name

let login = form.elements.login;
console.log(login);

// получение и установка значений
console.log(login.value);
login.value = "qwe";

let colorRadio = form.elements.color;
console.log(colorRadio);
let checkedValue  =colorRadio.value;
console.log(checkedValue);

for (let i = 0; i < colorRadio.length; i++) {
    if (colorRadio[i].checked) {
        form.elements.checkbox_fieldset.style.background = colorRadio[i].value;
    }
}

/**/
function getCheckedCheckBoxes(name) {
    let checkBoxes = document.getElementsByName(name);
    //массив для отмеченных чекбоксов
    let checkBoxChecked = [];

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            checkBoxChecked.push(checkBoxes[i].value);
            console.log('значение чекбоксов: ', checkBoxes[i].value);
        }
    }
    return checkBoxChecked;
}
let langArr = getCheckedCheckBoxes('lang[]');
console.log(langArr);

/**/

let checkBox = document.getElementsByName("lang[]");
console.log(checkBox);

let checkBox1 = form.elements['lang[]'];
console.log(checkBox1);

// выпадающий список
let countries = form.elements.countries;
console.log(countries);
console.log(countries.length);

for (let i = 0; i < countries.length; i++) {
    //console.log(countries[i]);
    if (countries[i].selected) {
        console.log('selected country: ', countries[i].value);
    }
}

form.addEventListener("submit", takeForm);

function takeForm(event) {
    event.preventDefault(); // отмена события по умолчанию
    //console.log(this); // someForm
    let formData = new FormData(this);
    console.log(formData.get("login"));
    console.log(formData.getAll("lang[]"));
}

let info = {
    login: {
        error: "Введите валидный логин",
        success: "Логин введен правильно"
    },
    pwd: {
        error: "Введите валидный пароль",
        success: "Пароль введен правильно"
    }
};

let validateFields = {
    login: form.elements.login,
    pwd: form.elements.pwd
};

let rules = {
    login: 3,
    pwd: 6
};

let formValidator = {
    init: function (info, fields, rules) {
        this.info = info;
        this.fields = fields;
        this.rules = rules;
    },
    addListeners: function () {
        for (let field in this.fields) {
            this.fields[field].addEventListener('blur', this.showResult.bind(this));
        }
    },
    showResult: function () {
        
    }
};

login.addEventListener('focus', focusOnElem);
function focusOnElem() {
    console.log('focus on', this);
}

login.addEventListener('blur', focusOut);
function focusOut() {
    console.log('elem value (login) was: ', this.value);
}