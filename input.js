const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") process.exit();
  conn.write(data);
};

module.exports = { setupInput };
