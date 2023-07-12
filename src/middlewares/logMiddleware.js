const fs = require('fs')

module.exports = (req, res, next) => {
    fs.appendFileSync('logNavigation.txt', 'Se ingresó en la pagina: "' + req.url +'"\n');
    next();
}