function createRows(container, numberOfPlayers){
  for (var i = 1; i <= numberOfPlayers; i++) {
    $("table").append("<tr id=player"+i+"></tr>")
  }
}

function addCellsToRow(container, n) {
  if(n > 0) {
    $("<td></td>").hide()
                  .appendTo(container)
                  .attr("id","data" + n)
                  .fadeIn(100, function() {
                    addCellsToRow(container, n - 1);
                  });
  }
}

function addCellsToRows(numberOfPlayers, rowLength) {
  for (var i = 1; i <= numberOfPlayers; i++) {
    container = $("#player"+i);
    addCellsToRow(container, rowLength);
    setTimeout(40);
  }
}




$(document).ready(function() {
  var table = $("table")
  var game = new Game();
  // var numberOfPlayers = game.getNumberOfPlayers();
  // game.initializePlayers(numberOfPlayers);
  // var rowLength = game.getRowLength();
  createRows("<table>", game.numberOfPlayers)
  addCellsToRows(game.numberOfPlayers, game.row_length);
  game.render();

  $(document).on("keyup", function(event){
    if (!game.wonBy) {
      game.handleKeyPress(event);
      game.render();
      game.checkForWinner();
    }
    else {

    }
  })

  $(document).on("click", "button", function(event){
    game.reset();
    game.render();
  })

});
