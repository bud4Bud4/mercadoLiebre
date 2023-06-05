let express = require('express');
let path = require('path')
let router = express.Router();

router.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../views/home.html")))

router.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, "../views/login.html")))

router.get("/register", (req, res) => res.sendFile(path.resolve(__dirname, "../views/register.html")))

router.get('/producto/:idProducto?', (req, res) => {
    if (req.params.idProducto == undefined) {
        res.send("Bienvenido a la pagina de producto")
    } else {
        res.send("Bienvenido a la pagina del producto " + req.params.idProducto)
    }
})

module.exports = router