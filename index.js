var express = require("express");
var http = require("http");
var app = express();

app.get("/profile", function(req, res) {
  res.json({ name: "Deepak", role: "Developer" });
});

http.createServer(app).listen(3001);
