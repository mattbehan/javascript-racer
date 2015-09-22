var Game = function() {
  this.time_started = new Date();
  this.players = [];
  this.wonBy = false;
  this.row_length = 0;
  this.numberOfPlayers = 0;

  this.new_game();
}



Game.prototype.checkForValidNumberPlayers = function(numberOfPlayers) {
  return (numberOfPlayers % 1 === 0 && numberOfPlayers > 1 && numberOfPlayers <= 5);
  }

Game.prototype.getNumberOfPlayers = function() {
  numberOfPlayers = prompt("How many players? Enter 2-5 players.");
  if (this.checkForValidNumberPlayers(numberOfPlayers)) {
    return numberOfPlayers;
  }
  else{
    alert("Please enter a number from 2-5.");
    Game.prototype.getNumberOfPlayers();
  }
}



Game.prototype.initializePlayers = function(numPlayers) {
  for ( var i = 0; i < numPlayers; i ++ ){
    var player = new Player(i+1);
    this.players.push(player);
  }
}

Game.prototype.getRowLength = function() {
  length = prompt("Please enter the length of the race, (anywhere from 10-22)");
  if (this.checkForValidRowlength(length) ){
    return length;
  }
  else {
    prompt("Please enter a number from 10-22.");
    this.getRowLength();
  }
}

Game.prototype.checkForValidRowlength = function(input) {
  return (input % 1 === 0 && input >= 10  && input <= 22);
}


Game.prototype.new_game = function() {
   this.numberOfPlayers = this.getNumberOfPlayers() ;
   this.initializePlayers(this.numberOfPlayers);
   this.row_length = this.getRowLength();
}


Game.prototype.handleKeyPress = function(key) {
  unicode = this.getUnicode(key);
  for (var i = 0; i < this.players.length; i ++) {
    if (this.players[i].key === unicode) {
      this.players[i].advance();
    }
  }
}

Game.prototype.getUnicode = function(key) {
  return key.keyCode
}

Game.prototype.render = function() {
  for (i = 1; i <= this.players.length; i++){
    var target_cell = this.row_length - this.players[i-1].position
    var player = $("#player" + i)
    $("#player"+i).children().removeClass("player-" + i + "-active");
    $("#player"+i).children("#data"+target_cell).addClass("player-" + i + "-active")
  }
}

Game.prototype.checkForWinner = function() {
  for(var i = 0; i < this.players.length; i++){
    if(this.players[i].position === this.row_length - 1 ) {
      this.wonBy = this.players[i];
      this.displayWinnerAndReplay();
    }
  }
}

Game.prototype.displayWinnerAndReplay = function() {
  $("button").show()
  var winner = this.wonBy;
  $("#winner-info").text("Congratulations " + winner.name + ", you win!")
  $("#winner").show()
}

Game.prototype.reset = function() {
  this.wonBy = false;
  for( i = 1; i <= this.players.length; i++) {
    this.players[i-1].position = 0;
  }
  $("#winner-info").text("")
  $("#winner").hide();
  $("button").hide();
}
