class Unit {
    constructor(name, dw, dh) {
        this._name = name;
        this._dw = dw;
        this._dh = dh;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set context(engine){
        this._context = engine.makeContextGlobal;
    }
    get context(){
        return this._context;
    }

    GetImage() {
        let imgUnit = new Image();
        console.log(imgUnit);
        imgUnit.src = 'img/' + this._name + ".png";
        console.log(imgUnit.src);
        imgUnit.onload = function () {
        this._context.drawImage(imgUnit, 25, 25, this._dw, this._dh);
        };
        console.log(imgUnit.onload);
    }
}
