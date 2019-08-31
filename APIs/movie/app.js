//npm i --save express ejs request
//http://www.omdbapi.com/?s=star&apikey=thewdb
//http://www.omdbapi.com/?i=tt3896198&apikey=thewdb
//http://omdbapi.com/?i=tt3896198&apikey=thewdb&plot=short&tomatoes=true

const express = require("express");
const app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
	res.render("search");
});

app.get("/results", (req, res)=>{
	//get data from query string
	//req.query.{query string name}
	var query = req.query.search;
	var url = `http://omdbapi.com/?s=${query}&apikey=thewdb`;
	request(url, (err, response, body) => {
		if(!err && response.statusCode == 200){
			const parsedData = JSON.parse(body)
			
			//filter when there is no data for searching
				res.render("results", {data : parsedData});
			//res.send(parsedData["Search"][0]["Title"]);
			//res.send(`${parsedData.Search.0.title}`);   .0 how tooooo ?????
			//console.log(`${parsedData.name} + hi`);
			
			//using ejs in views by passing data that is parsedData
			
			
		}else{
			console.log("sad");
		}
	});
});



app.listen(27000, (req, res) => {
	console.log("server is on !!");
});

