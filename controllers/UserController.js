var model = require ('../models/User');

exports.addUser = function (req, res){
var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    
};
model.create(data, function(err){
    if (err) res.json({err: err, message: 'The user could not be created'});
    res._idjson ({message: 'The user is created successfully'});
});
}

exports.getUser = function (req, res){
    model.find(function (err, users){
        if (err) res.json ({err: err, message: 'Something went wrong'});
        res.json ({users});
    });
}

exports.deleteUser = function (req, res){
    var options = {_id: req.params.id};
    model.remove(options, function (err, options){
        if (err) res.json({err: err, message: 'The resource was not found'});
        res.json ({message: 'The source was deleted'});
    });
}

exports.getUserByParam = function (req, res){
    var key = req.params.key;
    var value = req.params.value;
    switch (key) {
        case 'id':
        model.findById(value, '-password', function (err, data){
            if (err) res.json ({err: err, message: 'Id not found'});
            res.json({message: data});
        });
        break;

        case 'email':
        model.findOne({email: 'value'}, '-password', function (err, data){
            if (err) res.json ({err: err, message: 'Email not found'});
            res.json ({message: data});
        });

        case 'name':
        model.find({name: 'value'}, '-password', function(err, data){
            if (err) ({err: err, message: 'Name not found'});
            res.json({message: data});
        });
        break;
        default:
        res.json({message: 'Could not find resource'});
        break;    
    };
}

exports.updateUser = function (req, res){
    var id = req.params.id;
    var update = {
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    model.findByIdAndUpdate(id, update, function(err){
        if (err) res.json ({err: err, message: 'Update error'});
        res.json({message: update});
    });
}
