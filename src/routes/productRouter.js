const express = require('express');
const router = express.Router();
const productControler = require('../controllers/productController');


router.get('/producto/:idProducto?', (req, res) => {
    if (req.params.idProducto == undefined) {
        res.send("Bienvenido a la pagina de producto")
    } else {
        res.send("Bienvenido a la pagina del producto " + req.params.idProducto)
    }
})



module.exports = router