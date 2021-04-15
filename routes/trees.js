var express = require('express');
const tree_controlers= require('../controllers/tree');
var router = express.Router();

/* GET home page. */
router.get('/', tree_controlers.tree_view_all_Page );

router.get('/detail', tree_controlers.tree_view_one_Page);
router.get('/create', tree_controlers.tree_create_Page);
router.get('/update', tree_controlers.tree_update_Page);
router.get('/delete', tree_controlers.tree_delete_Page);

module.exports = router;