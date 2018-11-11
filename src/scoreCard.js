function Players {
  var players = [];
}


Players.prototype.addPlayer(name) = function () {
  players.push(name);
};

Players.prototype.deletePlayer(name) = function() {
  players.pop(name);
};

Players.prototype.currentPlayer() = function() {
  return players;
};

Players.prototype.nextPlayer() = function() {
  players.next();
};

Array.prototype.next = function() {
    return this[++this.current];
};
Array.prototype.prev = function() {
    return this[--this.current];
};
Array.prototype.current = 0;
