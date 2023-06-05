const express = require("express")
const app = express()
let rutasMain = require("./Routes/main.js")

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log("Server abierto en el puerto 3000"))

app.use('/', rutasMain)


