/**
 * Created by Olohireme on 29/05/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        email: {type: String, required: true},
        bio: {type: String, required: true},
        link: {type: String, max: 100}
    }
);

// Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

//Export model
module.exports = mongoose.model('Author', AuthorSchema);