// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  let name = "";
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log("server sent:", message);
  });

  conn.on("connect", () => {
    console.log("successfully connected to the game server");
    conn.write("Name: KOF");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  return conn;
};

module.exports = { connect };
