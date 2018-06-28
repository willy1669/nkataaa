var model = require ('../models/Post');

exports.addPost = function (req, res){
    var data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user
    };
    model.create(data, function(err){
        if (err) res.json({err: err, message: 'Post cannot be created'});
        res.json ({message: 'Post created successfully'});
    });
}

exports.getPost = function (req, res){
    model.find(posts, function (err){
        if (err) res.json({err: err, message: 'Post not found'});
        res.json({posts});
    });
}

exports.deletePost = function (req, res){
    var options = {_id: req.params.id,};
    model.remove(options, function (err){
        if (err) res.json({err: err, message: 'The resource could not be deleted'});
        res.json ({message: 'The Post was deleted'});
    });

}