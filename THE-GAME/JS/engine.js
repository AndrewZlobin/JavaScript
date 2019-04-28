class Engine {
    constructor(width, height) {
        this._canvas = document.getElementsByTagName('canvas')[0];
        this._canvas.width  = width;
        this._canvas.height = height;

    }

    makeContextGlobal() {
        this._context = this._canvas.getContext('2d');
        this._context.fillStyle = 'green';
        this._context.fillRect(0, 0 , 800, 600);

        return this._context;
    }


}
