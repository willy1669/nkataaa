var express = require('express');
var router = express.Router();
var userController =require ('../controllers/UserControllers');

/* GET users listing. */
router.post('/create', userController.addPost);

router.get('/', userController.getUser);


module.exports = router;
