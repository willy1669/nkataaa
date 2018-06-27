var mongoose = require ('mongoose');

PostSchema = mongoose.Schema({
     time: Date, 
     postBody: String,
     user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
     comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);