function CalcultorException(message) {
    this._message = message;
}

//родительский (базовый) класс для всех операций

function Operation() {

}

Operation.prototype.execute = function (first, second) {
    return 0;
};

//операция сложения

function Addition() {}

//наследование от Operation

Addition.prototype = Object.create(Operation.prototype);

Addition.prototype.execute = function (first, second) {
    return first + second;
};

//операция умножения

function Multiplication() {}

Multiplication.prototype = Object.create(Operation.prototype);

Multiplication.prototype.execute = function (first, second) {
    return first * second;
};

//операция вычитания

function Substraction() {}

Substraction.prototype = Object.create(Operation.prototype);
Substraction.prototype.execute = function (first, second) {
    return first - second;
};

//операция деления

function Division() {}

Division.prototype = Object.create(Operation.prototype);
Division.prototype.execute = function (first, second) {
    if (!second) {
        //выброс CalculatorException
        throw new CalcultorException("На ноль делить нельзя!");
    }
    return first / second;
};


//кальулятор

function Calculator(name) {
    this._name = name;
    this._operations = {};
}

//метод добавления операции
Calculator.prototype.addOperation = function (operator, operation) {
    if (!(operation instanceof Operation)) {
        throw new CalcultorException("Это не операция");
    }
    this._operations[operator] = operation;
};

Calculator.prototype.calculate = function (first, second, operator) {
    if (!(operator in this._operations)) {
        throw new CalcultorException("Данная операция не поддерживается");
    }
    let operationValue = this._operations[operator];
    return operationValue.execute(first, second);
};