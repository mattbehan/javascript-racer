function Player(i) {

  function getKey(i) {
    switch(i){
      case 1:
        return 16
        break;
      case 2:
        return 37
        break;
      case 3:
        return 32
        break;
      case 4:
        return 8
        break;
      case 5:
        return 27
        break;
    }
  }

  function getName(){
    name = prompt("Please enter your name..");
    if (name.length != 0) {
      return name;
    }
    else {
      getName;
    }
  }

  this.name = getName();
  this.key = getKey(i);
  this.position = 0 ;
}

Player.prototype.advance = function() {
  this.position += 1;
}

// left arrow: 37
// spacebar: 32
//              shift: 16
// backspace: 8
// escape:27
