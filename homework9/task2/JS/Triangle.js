class Triangle {
    constructor (x1, x2, x3, y1, y2, y3) {
        this._prop1 = x1 - x3;
        this._prop2 = y1 - y3;
        this._prop3 = x2 - x3;
        this._prop4 = y2 - y3;
        this._a = Math.abs(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1),2)));
        this._b = Math.abs(Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1),2)));
        this._c = Math.abs(Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2),2)));
    }

    countPerimeter() {
        let perimetr = this._a + this._b + this._c;
        console.log("периметр треугольника", perimetr);
        return perimetr;
    }

    countArea() {
        let square = Math.abs(0.5 * ((this._prop1 * this._prop4) - (this._prop2 * this._prop3)));
        console.log("Площадь треугольника:", square);
        return square;
    }
}

/*A = x1,y1 B = x2,y2 C = x3,y3*/