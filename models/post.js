/**
 * Created by Olohireme on 29/05/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = Schema({
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    date_modified: {type: Date, required: true, default:Date.now},
    body: {type: String, required: true},
    category: [{type: Schema.ObjectId, ref: 'Category', required: true}]
});

// Virtual for book's URL
PostSchema
    .virtual('url')
    .get(function () {
        return '/catalog/post/' + this._id;
    });

//Export model
module.exports = mongoose.model('Post', PostSchema);