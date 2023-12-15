var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
    lastname : String,
    firstname : String,
    address : String,
});
var Client = mongoose.model("clients", clientSchema);
var c = new Client({lastname :"Clinton", firstname :"Bill", address :"Washington"});
console.log("Before the save() statement");
Client.create({lastname :"Obama", firstname :"Barack", address :"Washington"}, function(err, doc) {
    console.log("The client is inserted into the collection",
    doc);
});
console.log("After the save() statement");