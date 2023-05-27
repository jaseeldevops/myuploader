const { exec } = require("child_process");

const buildApp = (req, res) => {
  res.send(`Succes`);
  exec(`sh buildInServer.sh`, (error, stdout, stderr) => {
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
};

module.exports = { buildApp };
