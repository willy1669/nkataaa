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

