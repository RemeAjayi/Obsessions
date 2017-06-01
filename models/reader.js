/**
 * Created by Olohireme on 29/05/2017.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReaderSchema = Schema(
    {
        username: {type: String, required: true, max: 100},
        email: {type: String, required: true, max: 100},
        suscribed: {type: Boolean}

    }
);

// Virtual for reader's URL
ReaderSchema
    .virtual('url')
    .get(function () {
        return '/catalog/reader' + this._id;
    });

//Export model
module.exports = mongoose.model('Reader', ReaderSchema);