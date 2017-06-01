/**
 * Created by Olohireme on 29/05/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = Schema({
    reader: {type: Schema.ObjectId, ref: 'Reader', required: true},
    post: {type: Schema.ObjectId, ref: 'Post', required: true},
    body: {type: String, required: true}
});

// Virtual for comment's URL
CommentSchema
    .virtual('url')
    .get(function () {
        return '/catalog/comment/' + this._id;
    });

//Export model
module.exports = mongoose.model('Comment', CommentSchema);