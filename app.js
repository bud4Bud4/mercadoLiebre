const { log } = require("console")
const express = require("express")
const app = express()
const path = require("path")

app.listen(3030, () => console.log("Server abierto en el puerto 3030"))
app.get("/", (req, res) => res.send("pepe"))