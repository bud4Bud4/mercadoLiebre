const { log } = require("console")
const express = require("express")
const app = express()
const path = require("path")

app.use(express.static('public'));

app.listen(3030, () => console.log("Server abierto en el puerto 3030"))

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")))

app.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, "./views/login.html")))
app.get("/register", (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")))
