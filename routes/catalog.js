/**
 * Created by Olohireme on 01/06/2017.
 */
var express = require('express');
var router = express.Router();

// Require controller modules
var post_controller = require('../controllers/postController');
var author_controller = require('../controllers/authorController');
var category_controller = require('../controllers/categoryController');

/// POST ROUTES ///

/* GET catalog home page. */
router.get('/', post_controller.index);

/* GET request for creating a Post. NOTE This must come before routes that display Post (uses id) */
router.get('/post/create', post_controller.post_create_get);

/* POST request for creating Post. */
router.post('/post/create', post_controller.post_create_post);

/* GET request to delete Post. */
router.get('/post/:id/delete', post_controller.post_delete_get);

// POST request to delete Post
router.post('/post/:id/delete', post_controller.post_delete_post);

/* GET request to update Post. */
router.get('/post/:id/update', post_controller.post_update_get);

// POST request to update Post
router.post('/post/:id/update', post_controller.post_update_post);

/* GET request for one Post. */
router.get('/post/:id', post_controller.post_full_content);

/* GET request for list of all Post items. */
router.get('post', post_controller.post_list);

/// AUTHOR ROUTES ///

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */
router.get('/author/create', author_controller.author_create_get);

/* POST request for creating Author. */
router.post('/author/create', author_controller.author_create_post);

/* GET request to delete Author. */
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author
router.post('/author/:id/delete', author_controller.author_delete_post);

/* GET request to update Author. */
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author
router.post('/author/:id/update', author_controller.author_update_post);

/* GET request for one Author. */
router.get('/author/:id', author_controller.author_detail);

/* GET request for list of all Authors. */
router.get('/authors', author_controller.author_list);

/// CATEGORY ROUTES ///

/* GET request for creating a Category. NOTE This must come before route that displays Category (uses id) */
router.get('/category/create', category_controller.category_create_get);

/* POST request for creating Category. */
router.post('/category/create', category_controller.category_create_post);

/* GET request to delete Category. */
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete Category
router.post('/category/:id/delete', category_controller.category_delete_post);

/* GET request to update Category. */
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update Category
router.post('/category/:id/update', category_controller.category_update_post);

/* GET request for one Category. */
router.get('/category/:id', category_controller.category_detail);

/* GET request for list of all Category. */
router.get('/categories', category_controller.category_list);




module.exports = router;
