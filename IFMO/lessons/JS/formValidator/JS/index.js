class FormValidator{
    constructor(form) {
        this._form = form.querySelector(".validate");
        this._form.addEventListener('submit', this.some.bind(this));
    }
    addRules(rules){
        this._rules = rules.rules;
        this._messages = rules.messages;
    }

    some(event) {
        this._event = event.preventDefault();

        for (let i = 0; i < this._form.length; i++){
            if (!this._rules[this._form[i].name].test(this._form[i].value)) {
                console.log("error");
            }
        }
    }



}
// for (let i = 0; i < elem.length; i++){
//     if (!this._rules[elem[i].name].test(elem[i].value)) {
//         // вывести сообщение об ошибке
//     }
// }


let form = document.forms.someForm;

let formValidator = new FormValidator(form);
console.log(formValidator);

formValidator.addRules({
    rules: {
        login: /.....[0-9][0-9][0-9][0-9]/,
        pwd: /[0-9].[A-Z].[a-z]/
    },
    messages: {
        login: "Сообщение для поля login",
        pwd: "Сообщения для поля pwd"
    }
});

formValidator.some();
// formValidator.validate();