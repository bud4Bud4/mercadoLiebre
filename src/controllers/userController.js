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
        console.log(req.body);
        const user ={ 
        "id" : datos.length + 1,
        "name" : req.body.name,
        "lastName" : req.body.lastName,
        "user" : req.body.user,
        "birthday" : req.body.birthday,
        "country" : req.body.country,
        "city" : req.body.city,
        "street" : req.body.street,
        "height" : req.body.height,
        "detail" : req.body.detail,
        "userProfile" : req.body.userProfile,
        "interests" : req.body.interests,
        "avatar" : req.body.avatar,
        "password" : req.body.password
        }
        fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), JSON.stringify([...datos, user], null, 2), 'utf-8');
        res.redirect("/")
        }
    }
