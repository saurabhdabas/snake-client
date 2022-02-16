let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  // to terminate the game
  if (key === '\u0003') {
    process.exit();
  }
  // Moving the snake on the board 
  if (key === 'w') {
    connection.write("Move: up")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  // snake saying stuff
  if (key === 'z') {
    connection.write("Say: Hiss!")
  }
};

module.exports = setupInput;