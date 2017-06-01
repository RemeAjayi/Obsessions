/**
 * Created by Olohireme on 29/05/2017.
 */
var Category = require('../models/category');

// Display list of all Category
exports.category_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Category list');
};

// Display detail page for a specific Category
exports.category_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Category detail: ' + req.params.id);
};

// Display Category create form on GET
exports.category_create_get = function(req, res) {
    res.render('category_form', { title: 'Create Category' });
};

// Handle Genre create on POST
exports.category_create_post = function(req, res, next) {

    //Check that the name field is not empty
    req.checkBody('name', 'Category name required').notEmpty();

    //Trim and escape the name field.
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run the validators
    var errors = req.validationErrors();

    //Create a genre object with escaped and trimmed data.
    var category = new Category(
        { name: req.body.name }
    );

    if (errors) {
        //If there are errors render the form again, passing the previously entered values and errors
        res.render('category_form', { title: 'Create Category', category: category, errors: errors});
        return;
    }
    else {
        // Data from form is valid.
        //Check if Genre with same name already exists
        Category.findOne({ 'name': req.body.name })
            .exec( function(err, found_category) {
                console.log('found_category: ' + found_category);
                if (err) { return next(err); }

                if (found_category) {
                    //Genre exists, redirect to its detail page
                    res.redirect(found_category.url);
                }
                else {

                    category.save(function (err) {
                        if (err) { return next(err); }
                        //Category saved. Redirect to genre detail page
                        res.redirect(category.url);
                    });

                }

            });
    }

};

// Display Category delete form on GET
exports.category_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category delete GET');
};

// Handle Category delete on POST
exports.category_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Category update form on GET
exports.category_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category update GET');
};

// Handle Category update on POST
exports.category_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Category update POST');
};