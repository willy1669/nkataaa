var model = require ('../models/Post');

exports.addPost = function (req, res){
    var data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'Post cannot be created'});
        res.json ({message: 'Post created successfully'});
    });
}

