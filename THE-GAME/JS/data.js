let game = new Engine(800, 600, "blue");

let player = new Player("player", 25, 25);

game.addUnit(player);
game.playerImgGenerate();

player.getEngineParams(game);
player.playerMove();

let enemies = [];
console.log(enemies);

for (let i = 1; i <= 6; i++) {
    enemies.push(new Enemy("enemy" + [i], game.randomAmount(100, 750), game.randomAmount(100, 550)));
}

console.log(enemies);

game.addUnit(enemies);
game.foesImgGenerate();