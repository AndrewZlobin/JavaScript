function Cat() {
    
}

Cat.prototype.setName = function (name) {
    if (name.length < 3) {
        console.log("Кто так бойцового кота называет? " + this.getName() + "!\nПридумай другое имя");
        return;
    }

    this._name = name;
};

Cat.prototype.getName = function () {
    return this._name;
};

/**/

Cat.prototype.setAge = function (age) {
    if (age < 2) {
        console.log("Кот " + this.getName() +  "\nслишком молодой! Приходи через годик-другой");
        return;
    }

    this._age = age;
};

Cat.prototype.getAge = function () {
    return this._age;
};

/**/

Cat.prototype.setWeight = function (weight) {
    if (weight < 1 && weight > 10) {
        console.log("Что с" + this.getName() + "? Коту срочно нужно на диету, никаких боев!");
        return;
    }

    this._weight = weight;
};

Cat.prototype.getWeight = function () {
    return this._weight;
};

/**/

Cat.prototype.setStr = function (str) {
    if (str < 1) {
        console.log("Твой кот " + this.getName() + " слабак! Не приводи его больше сюда!");
        return;
    }

    this._str = str;
};

Cat.prototype.getStr = function () {
    return this._str;
};