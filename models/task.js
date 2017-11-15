let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: ObjectId,
        ref: 'author'
    },
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('task', TaskSchema);