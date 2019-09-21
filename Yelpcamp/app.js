var express = require("express"),
	app 	= express();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
	res.render("landing");
});

app.get("/campground", (req,res)=>{
	var campground = [
		{name : "test camp", image  : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg"},
		{name : "test camp", image  : "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg"}
	];
	res.render("campground", {campgrounds : campground});
});

app.listen(3000, (req,res)=>{
	console.log("server is on !!");
});