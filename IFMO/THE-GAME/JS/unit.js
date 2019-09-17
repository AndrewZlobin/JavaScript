class Unit {
    constructor (name) {
        this._name = name;
        this._dw = 64;
        this._dh = 64;
        this._imgPlayer = new Image();

        this._resultCounter = 0;
        this._resultShow = document.getElementById("result");
    }

    getEngineParams(engine) {
        this._engine = engine;
        // console.log(engine._canvas);
    }
}

class Player extends Unit {
    constructor(name) {
        super(name);
        this._x = 25;
        this._y = 25;
        this._imgPlayer = new Image();
    }

    playerMove() {
        // let contextForPlayerMove = this._engine._context;
        document.addEventListener("keypress", player.moveRestricionAndCollision.bind(this));
        // let imgPlayer = this._imgPlayer;
    }

    moveRestricionAndCollision(event) {

        //let pForResultCounter = document.getElementById("result");

        let contextForPlayerMove = this._engine._context;
        contextForPlayerMove.fillStyle = game._context.fillStyle;
        contextForPlayerMove.fillRect(player._x, player._y, player._dw, player._dh);

        this._enemies = enemies;

        let imgPlayer = this._imgPlayer;

        //движение игрока

        if (event.code === "KeyD") {
            this._x += 10;
        } else if (event.code === "KeyA") {
            this._x -= 10;
        } else if (event.code === "KeyS") {
            this._y += 10;
        } else if (event.code === "KeyW") {
            this._y -= 10;
        }

        //ограничение прохода игрока за пределы поля

        if (this._x < -(this._dw / 4)) {
            this._x = -(this._dw / 4);
            // console.warn("current X:", player._x);
        } else if (this._x > (game._canvas.width - (25 * (this._dw / 32)))) {
            this._x = game._canvas.width - (25 * (this._dw / 32));
        } else if (this._y < -(this._dh / 8)) {
            this._y = -(this._dh / 8);
        } else if (this._y > (game._canvas.height - (25 * (this._dh / 32)))) {
            this._y = game._canvas.height - (25 * (this._dh / 32));
        }
        // console.log("x in function:", player._x);
        // console.log("y in function:", player._y);
        // console.table("Player X, X+DW, X+DW/2:", player._x, player._x + player._dw, player._x + player._dw/2);
        // console.table("Player Y, Y+DW, Y+DW/2:", player._y, player._y + player._dw, player._y + player._dw/2);
        // console.table("Enemy One X, X+DW, X+DW/2:", enemies[0]._x, enemies[0]._x + enemies[0]._dw, enemies[0]._x + enemies[0]._dw/2);
        // console.table("Enemy One Y, Y+DW, Y+DW/2:", enemies[0]._y, enemies[0]._y + enemies[0]._dw, enemies[0]._y + enemies[0]._dw/2);

        contextForPlayerMove.drawImage(imgPlayer, this._x, this._y, this._dw, this._dh);

        //столкновение игрока с врагами

        for (let i = 0; i < enemies.length; i++) {

            let valueToCountPlayerXCollision = this._dw * 2 / 100;
            let valueToCountPlayerYCollision = this._dh * 2 / 100;
            let valueToCountEnemyXCollision = enemies[i]._dw * 2 / 100;
            let valueToCountEnemyYCollision = enemies[i]._dh * 2 / 100;

            if (this._x <= enemies[i]._x + enemies[i]._dw / valueToCountEnemyXCollision &&
                this._x + this._dw / valueToCountPlayerXCollision >= enemies[i]._x &&
                this._y + this._dh / valueToCountPlayerYCollision >= enemies[i]._y &&
                this._y <= enemies[i]._y + enemies[i]._dh / valueToCountEnemyYCollision) {

                this._resultCounter++;

                if (this._resultCounter%10 === 0 || this._resultCounter%10 === 5) {
                    let devilScream = new Audio();
                    devilScream.src = 'mp3/scream.mp3';
                    devilScream.autoplay = true;
                }
                console.log(this._resultCounter%10);

                game._context.fillRect(enemies[i]['_x'], enemies[i]['_y'], enemies[i]['_dw'], enemies[i]['_dh']);
                console.log(enemies);
                enemies[i].regenerateEnemy();
                enemies.splice([i], 1);
                game.foesImgGenerate();
            }
        }
        this._resultShow.innerHTML = this._resultCounter;
    }
}

class Enemy extends Unit{
    constructor (name, x, y) {
        super (name);
        this._x = x;
        this._y = y;
    }

    regenerateEnemy() {
        enemies.push(new Enemy("enemy0", game.randomAmount(25, 750), game.randomAmount(25, 550)));
        console.log(enemies);
    }
}