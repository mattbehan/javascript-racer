var Game = function() {
  this.time_started = new Date();
  this.players = [];
  this.wonBy = false;
  this.row_length = 0;
  this.numberOfPlayers = 0;
  this.started = false;

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
    return this.getNumberOfPlayers();
  }
}



Game.prototype.initializePlayers = function(numPlayers) {
  for ( var i = 0; i < numPlayers; i ++ ){
    var player = new Player(i+1);
    this.players.push(player);
  }
}

Game.prototype.checkForValidRowlength = function(input) {
  return (input % 1 === 0 && input >= 10  && input <= 22);
}

Game.prototype.getRowLength = function() {
  var length = prompt("Please enter the length of the race, (anywhere from 10-22)");
  if (this.checkForValidRowlength(length) ){
    return length;
  }
  else {
    alert("Please enter a number from 10-22.");
    return this.getRowLength();
  }
}




Game.prototype.new_game = function() {
   this.numberOfPlayers = this.getNumberOfPlayers() ;
   this.initializePlayers(this.numberOfPlayers);
   this.row_length = this.getRowLength();
}

Game.prototype.start = function() {
  this.started = true;
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

// left this out of the view because we would have to send it the array of players, which I felt was passing too much information


Game.prototype.checkForWinner = function() {
  for(var i = 0; i < this.players.length; i++){
    if(this.players[i].position === this.row_length - 1 ) {
      this.wonBy = this.players[i];
      return true;
    }
  }
}


Game.prototype.resetPositionsAndWinner = function() {
  this.wonBy = false;
  for( i = 1; i <= this.players.length; i++) {
    this.players[i-1].position = 0;
  }
}
