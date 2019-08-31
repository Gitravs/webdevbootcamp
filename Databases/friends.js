var mongoose = require("mongoose");
/*cat_app name of db*/
mongoose.connect('mongodb://localhost:27017/friend_app', { useNewUrlParser: true });

//pattern for data
var friendSchema = new mongoose.Schema({
	name: String,
	age: Number,
	university: String
});

//Cat is variable to access DB
var Friend = mongoose.model("friends"/*Colection of data*/, friendSchema);

//javascript variable
var george = new Friend({
	name: "Kitravee",
	age: 24,
	university: "KMUTNB"
});
//Adding a new cat to DB
george.save(function(err, dbstatus){
	if(err){
		console.log("some thing wrong");
	}else{
		console.log("there is no problem");
		console.log(dbstatus);
	}
})