let rectangle = new Rectangle(0, 20, 0, 30);
console.warn("Прямоугольник", rectangle);

rectangle.countPerimeter();
rectangle.countArea();

let triangle = new Triangle(1, 2, 5, 1, 5, 3);
console.warn("Треугольник", triangle);
triangle.countPerimeter();
triangle.countArea();

let circle = new Circle(2, 5, 9, 3);
console.warn("Окружность", circle);
circle.countPerimeter();
circle.countArea();
circle.countLength();