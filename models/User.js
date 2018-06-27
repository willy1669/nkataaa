var mongoose = require ('mongoose');

UserSchema = mongoose.Schema ({
    name: String,
    email: {type: String, Unique: true},
    password: String,
    posts:({type: mongoose.Schema.Types.ObjectId, ref: 'Post'})
});

module.exports = mongoose.model('User', UserSchema);