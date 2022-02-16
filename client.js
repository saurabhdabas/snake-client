const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host:IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write("Name: SSD")
    console.log("Connection with the server established");
  });
  conn.on("connect", () => {
    // code that make the snake moves
    // conn.write("Move: up")
    // setTimeout(()=>{
    //   conn.write("Move: left")
    // },1000)
    // setInterval(()=>{
    //   conn.write("Move: down")
    // },5000)
  });
  return conn;
};

module.exports = {connect};