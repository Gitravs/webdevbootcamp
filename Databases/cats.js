var mongoose = require("mongoose");
/*cat_app name of db*/
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

//pattern for data
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

//Cat is variable to access DB
var Cat = mongoose.model("Cat"/*Colection of data*/, catSchema);

//javascript variable
// var george = new Cat({
// 	name: "George",
// 	age: 11,
// 	temperament: "Grouchy"
// });

// Adding a new cat to DB
// george.save(function(err, cat){
// 	if(err){
// 		console.log("some thing wrong");
// 	}else{
// 		console.log("there is no problem");
// 		console.log(cat);
// 	}
// })
Cat.create({
	name: "Miamy",
	age: 5,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}
});

Cat.find({}, function(err, cats){
	if(err){
		console.log(err);
	} else{
		console.log("ALL the cat");
		console.log(cats);
	}
});