class Triangle {
    constructor (x1, x2, x3, y1, y2, y3) {
        this.prop1 = x1 - x3;
        this.prop2 = y1 - y3;
        this.prop3 = x2 - x3;
        this.prop4 = y2 - y3;
    }

    countArea() {
        let s = Math.abs(0.5 * ((this.prop1 * this.prop4) - (this.prop2 * this.prop3)));
        console.log("Площадь треугольника:", s);
        return s;
    }
}