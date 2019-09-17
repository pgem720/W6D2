class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    $('li').on('click', (e) => {
      this.makeMove($(e.currentTarget))
    });
  }

  makeMove($square) {
    try {
      this.game.playMove($square.data("pos"));
      $($square).append(this.game.currentPlayer);
      $($square).toggleClass("move");
    } catch(error) {
      return alert("Move is invalid");
    }
    if (this.game.isOver()) {
      $("figure").append("<figcaption>" + `${this.game.currentPlayer}` + " won!</p>")
      for (let i = 0; i < 9; i++) {
        let $li = $("li").eq(i);
        if ($li.text() === this.game.currentPlayer) {
          $li.toggleClass("win");
        } else {
          $li.toggleClass("lose");
        }
      }
    }
  }

  setupBoard() {
    this.el.append("<ul></ul>")
    for (let x = 0; x < 3; x++) {
      for ( let y = 0; y < 3; y++) {
        let $li = $("<li>");
        $li.data("pos", [x, y]);
        $("ul").append($li);
      } 
    } 
  }
}

module.exports = View;