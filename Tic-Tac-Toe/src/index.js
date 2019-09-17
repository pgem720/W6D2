const View = require("./ttt-view")
const Game = require("../code/game")

  $(() => {
    // Your code here
    const game = new Game();
    const $container = $(".ttt")
    const view = new View(game, $container)
    view.setupBoard();
    view.bindEvents();
  });
