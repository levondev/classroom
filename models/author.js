let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let AuthorSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    age: Number
});

module.exports = mongoose.model('author', AuthorSchema);