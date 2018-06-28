var express = require('express');
var router = express.Router();
var userController =require ('../controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);

router.get('/', userController.getUser);

router.post('/update/:id', userController.updateUser);

router.get('/delete/:id', userController.deleteUser);

module.exports = router;
