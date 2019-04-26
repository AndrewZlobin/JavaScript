class Circle {
    constructor (x, y, h, k) {
        this._radius = Math.sqrt(Math.pow((x - h), 2) + Math.pow((y - k), 2));
    }

    countPerimeter () {
        let perimetr = 2 * Math.PI * this._radius;
        console.log("Периметр окружности: ", perimetr);
        return perimetr;
    }

    countArea() {
        let square = Math.PI * Math.pow(this._radius, 2);
        console.log("Площадь окружности: ", square);
        return square;
    }

    countLength() {
        let length = 2 * Math.PI * this._radius;
        console.log("Длина окружности: ", length);
        return length;
    }
}