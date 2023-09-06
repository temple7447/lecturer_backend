const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AssignHomeSchema = new Schema({
    messageA: { type: String, required: true },
    DepartmentA: { type: String, required: true },
    levelA: { type: String, required: true },
    programmA: { type: String, required: true },
    timeA: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

})


module.exports = mongoose.model("AssignHomeSchema", AssignHomeSchema)