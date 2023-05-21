var express = require("express");
var app = express();
const { exec } = require("child_process");

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Define a route for your HTML page
app.get('/mypage', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mypage.html'));
});

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
