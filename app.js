const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/music.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/contacto.html"));
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto " + port);
});
