var express = require('express');
const tree_controlers = require('../controllers/tree');
var router = express.Router();
// A little function to check if we have an authorized user and continue 
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login")
}
/* GET home page. */
router.get('/', tree_controlers.tree_view_all_Page);

router.get('/detail', tree_controlers.tree_view_one_Page);
router.get('/create', secured, tree_controlers.tree_create_Page);
router.get('/update', secured, tree_controlers.tree_update_Page);
router.get('/delete', secured, tree_controlers.tree_delete_Page);

module.exports = router;