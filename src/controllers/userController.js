const { error } = require('console');
const fs = require('fs');
const path = require('path')
const {validationResult} = require('express-validator')
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));


module.exports = {
    userLogin: (req, res) => {
        res.render("users/login")
    },
    userLoginProcess: (req,res) =>{
        const userFound = datos.find((row) => row.user == req.body.user);
        if (userFound) {
            if (req.body.password == userFound.password){
                req.session.user = userFound;
                console.log(req.session)
                res.redirect("/user/profile")
            }else{ console.log(req.session);res.render("users/login", {errors: "Credenciales no validas", oldData: req.body})}
        } else { console.log(req.session);res.render("users/login", {errors: "Credenciales no validas", oldData: req.body})}
        
    },

    userRegister: (req,res) => {
        res.render("users/register")
    },
    userRegisterProcess: (req, res) => {
        console.log(req.body);
        // console.log("" +req.file.filename);
        let rdoValidacion = validationResult(req)
        if (rdoValidacion.errors.length > 0){
            res.render("users/register", {
                errors: rdoValidacion.mapped(),
                oldData: req.body })
        } else {
        const user ={ 
        "id" : datos.length + 1,
        "name" : req.body.name,
        "lastName" : req.body.lastName,
        "user" : req.body.user,

        // "birthday" : req.body.birthday,
        // "country" : req.body.country,
        // "city" : req.body.city,
        // "street" : req.body.street,
        // "height" : req.body.height,
        // "detail" : req.body.detail,
        // "userProfile" : req.body.userProfile,
        // "interests" : req.body.interests,

        "avatar" : req.file.filename,
        "password" : req.body.password
        }
        fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), JSON.stringify([...datos, user], null, 2), 'utf-8');
        res.redirect("/")
        }
    },

    userProfile: (req,res) =>{
        console.log(req.session);
        const userFound = datos.find((row) => row.user == req.session.user.user)
        console.log(userFound);
        if (userFound) {
            res.render("users/profile.ejs", {userFound: userFound})
        }else {res.send("usuario no encontrado")}
        
    },
    userEditProcess: (req,res) => {     
        const usuario = datos.find((row) => row.id == req.params.id);
        for (let propiedad in req.body) {
            usuario[propiedad] = req.body[propiedad];
        };
        fs.writeFileSync(path.resolve(__dirname, '../database/users.json'), JSON.stringify(datos, null, 2));
        return res.redirect('/user/profile');
    }
    }
