var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tree_controller = require('../controllers/tree');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// tree ROUTES ///
// POST request for creating a tree.
router.post('/resource/trees', tree_controller.tree_create_post);
// DELETE request to delete tree.
router.delete('/resource/trees/:id', tree_controller.tree_delete);
// PUT request to update tree.
router.put('/resource/trees/:id', tree_controller.tree_update_put);
// GET request for one tree.
router.get('/resource/trees/:id', tree_controller.tree_detail);
// GET request for list of all tree items.
router.get('/resource/trees', tree_controller.tree_list);
module.exports = router;