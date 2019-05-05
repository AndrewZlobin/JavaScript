class Engine {
    constructor(width, height, fillStyle) {
        this._canvas = document.getElementsByTagName('canvas')[0];
        this._canvas.width  = width;
        this._canvas.height = height;
        this._context = this._canvas.getContext('2d');
        this._context.fillStyle = fillStyle;
        this._context.fillRect(0, 0 , this._canvas.width, this._canvas.height);
    }

    addUnit(unit){
        this._unit = unit;
    }

    randomAmount = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    playerImgGenerate() {
        let contextForPlayer = this._context;
        let imgPlayer = this._unit._imgPlayer;
        imgPlayer.src = 'img/' + this._unit._name + ".gif";
        imgPlayer.onload = function () {
            contextForPlayer.drawImage(imgPlayer, player._x, player._y, player._dw, player._dh);
        };
    }

    foesImgGenerate() {

        // console.log(enemies[1]['_name'] === "enemy" + 2);
        for (let i = 0; i < enemies.length; i++) {

            if (enemies[i]['_name'] === "enemy" + [i+1]){
                let contextForFoe = this._context;
                let imgFoe = enemies[i]['_imgPlayer'];
                imgFoe.src = 'img/' + enemies[i]._name + ".png";
                // console.log(imgFoe);
                // console.log(enemies[i]);
                imgFoe.onload = function () {
                    contextForFoe.drawImage(imgFoe, enemies[i]['_x'], enemies[i]['_y'], enemies[i]['_dw'], enemies[i]['_dh']);
                };
            }

            if (enemies[i]['_name'] === "enemy0") {
                let contextForFoe = this._context;
                let imgFoe = new Image();
                imgFoe.src = 'img/enemy0.png';
                // console.log(imgFoe);
                // console.log(enemies[i]);
                imgFoe.onload = function () {
                    contextForFoe.drawImage(imgFoe, enemies[i]['_x'], enemies[i]['_y'], enemies[i]['_dw'], enemies[i]['_dh']);
                };
            }

        }
    }
}