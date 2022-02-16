const {connect} = require("./client")

console.log("Connecting ...");
let connInput = connect();
const setupInput = function () {
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
    connInput.write("Move: up")
  }
  if (key === 's') {
    connInput.write("Move: down")
  }
  if (key === 'a') {
    connInput.write("Move: left")
  }
  if (key === 'd') {
    connInput.write("Move: right")
  }
};
setupInput();