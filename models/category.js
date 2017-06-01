/**
 * Created by Olohireme on 29/05/2017.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema({
    name: {type: String, required: true}
});

// Virtual for category's URL
CategorySchema
    .virtual('url')
    .get(function () {
        return '/catalog/category/' + this._id;
    });

//Export model
module.exports = mongoose.model('Category', CategorySchema);