let Author = require(process.cwd() + "/models/author");

module.exports = (author) => {
   Author.findOne({}, (err, data) => {
      if(err) {
          console.log(err);
      }
      else {
          if(data) {
              console.log(data);
              console.log("There is already author");
              console.log("*************************");
          }
          else {
              Author.create(author, (err, data) => {
                 if(err) {
                   console.log(err);
                 }
                 else {
                     console.log(data);
                     console.log("Creating author for tasks first time");
                     console.log("*************************");
                 }
              });
          }
      }
   });
};