const path = require("path");

const myBio = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index", "jaseel.html"));
};
const mridhulBio = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index", "mridhul.html"));
};

module.exports = { myBio, mridhulBio };
