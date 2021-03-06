var tree = require('../models/tree');
// List of all trees
exports.tree_list = async function (req, res) {
    try {
        thetrees = await tree.find();
        res.send(thetrees);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific tree.
// for a specific Costume.
exports.tree_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await tree.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume update form on PUT.
exports.tree_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await tree.findById(req.params.id)
        // Do updates of properties
        if (req.body.treeName) toUpdate.treeName = req.body.treeName;
        if (req.body.fruitProduced) toUpdate.fruitProduced = req.body.fruitProduced;
        if (req.body.ageOfTree) toUpdate.ageOfTree = req.body.ageOfTree;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// Handle tree create on POST.
exports.tree_create_post = async function (req, res) {
    console.log(req.body)
    try {
        let document = new tree();
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"treetype":"goat", "cost":12, "size":"large"}
        document.treeName = req.body.treeName;
        document.fruitProduced = req.body.fruitProduced;
        document.ageOfTree = req.body.ageOfTree;

        let result = await document.save();
        res.send(result);
    } catch (err) {
        // console.log(err);
        res.send(err)
        res.status(500);
    }
};
// Handle tree delete on DELETE.
exports.tree_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await tree.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.tree_view_all_Page = async function (req, res) {
    try {
        thetrees = await tree.find();
        res.render('trees', {
            title: 'tree Search Results',
            results: thetrees
        });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle a show one view with id specified by query
exports.tree_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await tree.findById(req.query.id)
        res.render('treedetail', {
            title: 'tree Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a tree.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tree_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('treecreate', {
            title: 'tree Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a tree.
// query provides the id
exports.tree_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await tree.findById(req.query.id)
        res.render('treeupdate', {
            title: 'tree Update',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.tree_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await tree.findById(req.query.id)
        res.render('treedelete', {
            title: 'tree Delete',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};