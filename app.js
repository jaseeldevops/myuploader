var express = require("express");
var app = express();
const { exec } = require("child_process");

app.get("/buildapp", (req, res) => {
  res.send(`Succes`);
  exec(`sh test.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Script execution returned an error: ${stderr}`);
      return;
    }
    console.log(`Script output: ${stdout}`);
  });
});

app.get("/", function (req, res) {
  res.send("Welocme to Muhammeds World E5!");
});

app.listen(8000);
