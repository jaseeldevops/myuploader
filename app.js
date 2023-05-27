var express = require("express");
var app = express();
const path = require("path");
const { buildApp } = require("./method/buildapp");
const { myBio, mridhulBio } = require("./method/publicSite");
app.use(express.static(path.resolve(__dirname, "public/index")));

app.get("/buildapp", buildApp);
app.get("/mridhul", mridhulBio);
app.get("*", myBio);

app.listen(80);
