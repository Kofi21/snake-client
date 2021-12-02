// establishes a connection with the game server
const net = require("net");
const { IP, PORT, name } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log("server sent:", message);
  });

  conn.on("connect", () => {
    console.log("successfully connected to the game server");
    conn.write(name);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  return conn;
};

module.exports = { connect };
