let Author = require(process.cwd() + "/models/author");

module.exports = (author) => {
   Author.find({}, (err, data) => {
      if(err) {
          console.log(err);
      }
      else {
          if(data) {
              console.log(data);
          }
          else {
              Author.create(author, (err, data) => {
                 if(err) {
                   console.log(err);
                 }
                 else {
                     console.log("Creating author for tasks first time");
                 }
              });
          }
      }
   });
};