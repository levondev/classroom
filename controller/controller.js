let TaskModel = require(process.cwd() + "/models/task");
let AuthorModel = require(process.cwd() + "/models/author");

let Task = {
    get: (req, res, next) => {
        let id = req.params.id;
        TaskModel
            .findOne({title: id})
            .populate('author')
            .exec((err, data) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("find error");
                    }
                    else {
                        if(data) {
                            res.status(200).send(data);
                        }
                        else {
                            res.status(404).send("task not found");
                        }
                    }
            });
    },

    create: (req, res, next) => {
        let body = req.body;
        let author = body.author;

        AuthorModel.find({name: author}, (err, data) => {
            if(err) {
                console.log("finding error");
                res.status(500).send("find error");
            }
            else {
                if(data) {
                    body.author = data[0]._id;
                    TaskModel.create(body, (err, data) => {
                        if(err) {
                            console.log(err);
                            res.status(500).send("creating task error");
                        }
                        else {
                            console.log('created');
                            console.log(data);
                            console.log("*************************");
                            res.status(200).send(data);
                        }
                    });
                }
                else {
                    res.status(404).send("not founded author");
                }
            }
        });
    },

    update: (req, res, next) => {
        //TODO controller for updating
    },

    delete: (req, res, next) => {
        //TODO controller for deleting
    }
};

module.exports = Task;