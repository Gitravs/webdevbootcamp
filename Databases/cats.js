var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

//pattern for data
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

//Cat is variable to access DB
var Cat = mongoose.model("Cat"/*Colection of data*/, catSchema);

//Adding a new cat to DB
var george = new Cat({
	name: "George",
	age: 11,
	temperament: "Grouchy"
});

george.save(function(err, cat){
	if(err){
		console.log("some thing wrong");
	}else{
		console.log(cat);
	}
})