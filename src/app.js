const express = require("express");
const app = express();
const path = require('path');

const mainRouter = require("./routes/mainRouter.js")
const userRouter = require('./routes/usersRouter.js')
const productRouter = require('./routes/productRouter.js')

const methodOverride = require("method-override")

app.use(express.static('public'));
app.use('/products', express.static(path.join(__dirname, '../views/products')));
app.use('/users', express.static(path.join(__dirname, '../views/users')));

// Para recibir info que viaja por form -> req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => console.log("Server abierto en el puerto 3000"))

app.use('/', mainRouter)
app.use('/product', productRouter)
app.use('/user', userRouter)


