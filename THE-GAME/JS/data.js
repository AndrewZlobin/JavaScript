let game = new Engine(800, 600);
game.makeContextGlobal();

let player = new Unit("player", 128, 128);
console.log(player);
player.context = game;
console.log(player.context);
player.GetImage();
console.log(player.GetImage());
