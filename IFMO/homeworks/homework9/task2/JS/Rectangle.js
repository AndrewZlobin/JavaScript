class Rectangle {
    constructor (xFirst, xLast, yFirst, yLast) {
        this._length = xLast - xFirst;
        this._width = yLast - yFirst;
    }

    countPerimeter(){
        console.log("Периметр прямоульника:", (2*(this._length + this._width)));
        return (2*(this._length + this._width));
    }

    countArea() {
        console.log("Площадь прямоугольника:", (Math.abs(this._width) * Math.abs(this._length)));
        return (Math.abs(this._width) * Math.abs(this._length));

    }
}