const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise; // allow to use Promise with Mongo
mongoose.connect(
  "mongodb+srv://pakidam:faikandin1@cluster0-1gphw.azure.mongodb.net/test?retryWrites=true&w=majority"
);

module.exports.User = require("./user");
module.exports.Poll = require("./poll");
