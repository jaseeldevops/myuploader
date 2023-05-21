var express = require("express");
var app = express();
const { exec } = require("child_process");

app.get("/buildapp", (req, res) => {
  exec(`sh test.sh`, (error, stdout, stderr) => {
    if (error) {
      res.send(`Error executing the script: ${error.message}`);
      return;
    }
    if (stderr) {
      res.send(`Script execution returned an error: ${stderr}`);
      return;
    }
    res.send(`Script output: ${stdout}`);
  });
});

app.get("/", function (req, res) {
  res.send("Welocme to GeeksforGeeks!");
});

app.listen(8000);
