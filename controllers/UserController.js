var model = require ('../models/User');

exports.addUser = function (req, res){
var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
};
model.create(data, function(err){
    if(err) res.json({err: err, message: 'The user could not be created'});
    res,json ({message: 'The user is created successfully'});
});
}

exports.getUser = function (req, res){
    model.find(function (err, users){
        if(err) res.json ({err: err, message: 'Something went wrong'});
        res.json ({users});
    });
}

exports.deleteUser = function (req, res){
    var options = {_id: req.params.id};
    model.remove(function (err, options){
        if(err) res.json({err: err, message: 'The resource was not found'});
        res.json ({message: 'The source was deleted'});
    });
}


