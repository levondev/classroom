let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let Task = require(process.cwd() + "/controller/controller");
let createAuthor = require(process.cwd() + "/controller/author");
let dbName = "example"; // here you have to define your database name which you created on you mongo db
                        // for me it is "example"

mongoose.connect("mongodb://127.0.0.1/" + dbName);

let author = {
    name: "TestAuthor",
    age: 20
};

createAuthor(author); // this functions creates author if there is no author on our db yet

app = express();

app.use(bodyParser());


const titleValidation = (req, res, next) => {
    let { title } = req.body;

    if(title.length > 10) {
        res.status(400).send('Invalid title');
    } else {
        next();
    }
};

const fieldValidation = (req, res, next) => {
    let { title, author, body } = req.body;

    if (!title || !author || !body) {
        res.status(400).send('Invalid params');
    } else {
        next();
    }
};

app.get("/tasks/:id", Task.get);
app.post("/tasks", fieldValidation, titleValidation, Task.create);

//TODO create controllers for updateing task and deleting



app.listen(3000, console.log("Server running on port 3000"));


