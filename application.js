
$(document).ready(function() {
  var table = $("table");
  var game = new Game();
  var view = new View();
  view.createRows("<table>", game.numberOfPlayers);
  view.addCellsToRows(game.numberOfPlayers, game.row_length)
  view.render(game.players, game.row_length);
  view.addInfo(game.players);

  $(document).on("keyup", function(event){
    if (!game.wonBy && game.started) {
      game.handleKeyPress(event);
      view.render(game.players, game.row_length);
      game.checkForWinner();
    }
    else if (game.wonBy) {

      view.displayWinnerAndReplay(game.wonBy);
    }
  });

  $("#start").on("click", function(event){
    view.startGame();
    game.start()
  })

  $(document).on("click", "#replay", function(event){
    view.hideReplay();
    game.resetPositionsAndWinner();
    view.resetWinnerFields();
    view.render(game.players, game.row_length);
  })

});

// need to fix it so that it doesn't respond to keypress until div is removed

