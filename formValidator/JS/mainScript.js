class FormValidator{
    constructor(form) {
        this._form = form;
        this._validElems = document.querySelectorAll(".validate");
        this._form.addEventListener('submit', this.checkSome.bind(this));
        this._err = [];
        console.log(this._validElems[0].placeholder);
        this._errorForLogin = document.getElementById("error-for-login");
        this._errorForPassword = document.getElementById("error-for-pwd");
    };
    addRules(rules){
        this._rules = rules.rules;
        this._messages = rules.messages;
        // console.log(this._rules);
        // console.log(this._rules[this._validElems[0].name].test(this._validElems[0].value));
    };

    checkSome(event) {
        event.preventDefault();

        // let errorForLogin = document.getElementsByClassName("error-for-login");
        // let errorForPwd = document.getElementsByClassName("error-for-pwd");
        // console.warn(errorForLogin, errorForPwd);

        for (let i = 0; i < this._validElems.length; i++){
            if (!this._rules[this._validElems[i].name].test(this._validElems[i].value)) {
                this._err.push([this._validElems[i].name]);
                console.log(this._err);
                console.log(this._validElems[i].name);
            }

            if (this._validElems[i].name === 'pwd' &&
                !this._rules[this._validElems[i].name].test(this._validElems[i].value)){
                    // alert(this._validElems[i].name + " is incorrect!\n" + this._messages.pwd);
                    // console.log(errorForPwd);
                let notificationForPassword = document.createElement("blockquote");
                notificationForPassword.innerHTML = this._messages.pwd;
                document.body.appendChild(notificationForPassword);

                setTimeout(function () {
                    notificationForPassword.parentNode.removeChild(notificationForPassword)
                }, 4000);
                document.getElementsByName("pwd")[0].focus();
                }

            if (this._validElems[i].name === 'login' &&
                !this._rules[this._validElems[i].name].test(this._validElems[i].value)){
                // alert(this._validElems[i].name + " is incorrect!\n" + this._messages.login);
                // console.log(this._validElems[i].name)
                let notificationForLogin = document.createElement("blockquote");
                notificationForLogin.innerHTML = this._messages.login;
                document.body.appendChild(notificationForLogin);

                setTimeout(function () {
                    notificationForLogin.parentNode.removeChild(notificationForLogin)
                }, 4000);
                document.getElementsByName("login")[0].focus();
            }

            // if (!this._rules[this._validElems[i].name].test(this._validElems[i].value)){
            //     alert(this._validElems[i].name + " is incorrect!");
            // }
                // if (!this._rules[this._validElems[i].name].test(this._validElems[i].value)){
                //     // errorForPwd.innerHTML = this._messages.pwd;
                //     console.log(this._validElems[i].name);
                //     alert(this._validElems[i].name + " is incorrect!");
                // }
        }
    };

    isValid() {
        if (this._err.length > 0) {
            console.warn("Ошибок:", this._err.length);
            return false;
        } else {
            return true;
        }

    };
}
