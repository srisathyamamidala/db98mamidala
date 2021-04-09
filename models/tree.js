const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
treeName: String,
fruitProduced: String,
ageOfTree: Number
})
module.exports = mongoose.model("tree", treeSchema)