var express = require("express");
var app = express();
const { exec } = require("child_process");

const path = require("path");

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

app.use(express.static(path.resolve(__dirname, 'public/index')));
app.get("/mridhul/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public/index", "mridhul.html"));
});
app.get("/mridhul", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public/index", "mridhul.html"));
});
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "public/index", "jaseel.html"));
});

app.listen(80);
