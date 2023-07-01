const fs = require('fs');
const path = require('path')
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));


module.exports = {
    userLogin: (req, res) => {
        res.render("users/login")
    },

    userRegister: (req,res) => {
        res.render("users/register")
    },
    userRegisterProcess: (req, res) => {
        const user = {
            
        }
    }
}