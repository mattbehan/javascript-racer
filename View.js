var View = function() {
  // need it to be defined
};

View.prototype.displayWinnerAndReplay = function(winner) {
  $("#replay").css("");
  $("#winner-info").text("Congratulations " + winner.name + ", you win!");
  $("#winner").show();
};

// needs to be called in the controller still
View.prototype.resetWinnerFields = function() {
  $("#winner-info").text("");
  $("#winner").hide();
  $("#replay").css("visibility", "hidden");
};

// need to implement this still
View.prototype.hideInstructions = function() {
  $(".instructions").hide();
};

View.prototype.createRows = function(container, numberOfPlayers){
  for (var i = 1; i <= numberOfPlayers; i++) {
    $("table").append("<tr id=player"+i+"></tr>");
  }
};

View.prototype.addCellsToRow = function(container, n) {
  // necessary to avoid this referring to the window within the recursive call
  var self = this;
  if(n > 0) {
    $("<td></td>").hide()
                  .appendTo(container)
                  .attr("id","data" + n)
                  .fadeIn(100, function() {
                    self.addCellsToRow(container, n - 1);
                  });
  }
};

View.prototype.addCellsToRows = function(numberOfPlayers, rowLength) {
  for (var i = 1; i <= numberOfPlayers; i++) {
    container = $("#player"+i);
    this.addCellsToRow(container, rowLength);
    setTimeout(40);
  }
};

View.prototype.render = function(players, row_length) {
  for (i = 1; i <= players.length; i++){
    var target_cell = row_length - players[i-1].position
    var player = $("#player" + i)
    $("#player"+i).children().removeClass("player-" + i + "-active");
    $("#player"+i).children("#data"+target_cell)
    .addClass("player-" + i + "-active")
  }
}

View.prototype.addInfo = function(players) {
  for ( var i = 1; i <= players.length; i++){
    var player = players[i-1]
    $(".instructions-list").append("<li>" + player.name + ", Your key is " + player.keystroke + "</li>")
  }
}

View.prototype.start = function() {
  $("#start").show()
}

View.prototype.startGame = function() {
  // $(".overlay").css("z-index", "-1");
  $(".overlay").remove();

  $("#start").css("visibility", "hidden");
}
