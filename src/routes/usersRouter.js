const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const expressValidatorRegister = require('../middlewares/expressValidatorRegister');
const sessionValidator = require('../middlewares/sessionValidator');


let multerDiskStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        let folder = path.join(__dirname, '../../public/images');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName ="profilePic-" + Date.now()+ path.extname(file.originalname);
        cb(null,imageName);
    }
})
let fileUpload = multer({storage: multerDiskStorage})




router.get("/login",sessionValidator, userController.userLogin)
router.post("/login", userController.userLoginProcess)



router.get("/register",sessionValidator, userController.userRegister)
router.post("/register", fileUpload.single('avatar'),expressValidatorRegister, userController.userRegisterProcess)

router.get("/profile", userController.userProfile)
router.put("/userEditProcess", userController.userEditProcess)





module.exports = router