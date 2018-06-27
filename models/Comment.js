var mongoose = require ('mongoose');

CommentSchema = mongoose.Schema ({
    time: Date.now(),
    commentBody: String,
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.Schema('Comment', CommentSchema);