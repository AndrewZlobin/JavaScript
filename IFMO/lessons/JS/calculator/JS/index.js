let calculator = new Calculator("Сложение и вычитание");
calculator.addOperation("+", new Addition());
calculator.addOperation("-", new Substraction());
// calculator.addOperation("*", new Multiplication());
// calculator.addOperation("/", new Division());

let res = calculator.calculate(3, 6, "-");

console.log(res);

