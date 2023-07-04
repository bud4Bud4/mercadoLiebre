const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');


let multerDiskStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        let folder = path.join(__dirname, '../../public/images');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName = Date.now()+ path.extname(file.originalname);
        cb(null,imageName);
    }
})
let fileUpload = multer({storage: multerDiskStorage})




router.get("/login", userController.userLogin)



router.get("/register", userController.userRegister)
router.post("/register", fileUpload.single('avatar'), userController.userRegisterProcess)

router.get("/profile/:id", userController.userProfile)
router.put("/userEditProcess", userController.userEditProcess)





module.exports = router