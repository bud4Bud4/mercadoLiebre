const {body} = require('express-validator')
const path = require('path')

module.exports = [
    body('name')
        .notEmpty().withMessage('Debe indicar un nombre')
        .isLength(3).withMessage('El nombre debe contener por lo menos 3 caracteres'),
    body('lastName')
        .notEmpty().withMessage('Debe indicar un apellido')
        .isLength(3).withMessage('El apellido debe contener por lo menos 3 caracteres'),
    body('user')
        .notEmpty().withMessage('Debe indicar un nombre de usuario'),
    body('password')
        .isStrongPassword({
            minLength: 2,
            maxLength: 25,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 0,
            
        }).withMessage('La contraseña debe tener entre 2 y 25 caracteres, contener por lo menos un numero y una mayuscula'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']
        
        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
            return true
        }
        
    })
   ]