var express = require('express');
var router = express.Router();
var postController = require('../controllers/PostController');

/*GET Post Listings */
router.post('/create', PostController.addPost);

router.get('/', PostController.getPost);

router.get('/delete/id:', PostController.deletePost);