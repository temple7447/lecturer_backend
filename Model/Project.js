const mongoose = require('mongoose')
const Schema = mongoose.Schema


const databaseSchema = new Schema({
    fullname: { type: String, required: true },
    matriculation: { type: String, required: true },
    program: { type: String, required: true },
    level: { type: String, required: true },
    downloadURL: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

})


module.exports = mongoose.model("StudentForm", databaseSchema)