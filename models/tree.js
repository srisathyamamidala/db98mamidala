const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
    treeName: {
        type: String,
        required: [true, "Tree name should be mandatory"]
    },
    fruitProduced: String,
    ageOfTree: {
        type: Number,
        min: [1, "Age of tree should be minimum of 1"],
        max: [200, "Age of tree should be maximum of 200"]
    }
})
module.exports = mongoose.model("tree", treeSchema)