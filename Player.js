function Player(i) {

  var self = this;

  function getKey(i) {
    switch(i){
      case 1:
        self.keystroke = "Shift"
        return 16
      case 2:
        self.keystroke = "Left Arrow"
        return 37
      case 3:
        self.keystroke = "Spacebar"
        return 32
      case 4:
        self.keystroke = "Backspace"
        return 8
      case 5:
        self.keystroke = "Escape"
        return 27
    }
  }

  function getName(){
    name = prompt("Please enter your name..");
    if (name.length != 0) {
      return name;
    }
    else {
      return getName();
    }
  }

  this.name = getName();
  this.key = getKey(i);
  this.position = 0 ;
}

Player.prototype.advance = function() {
  this.position += 1;
}
