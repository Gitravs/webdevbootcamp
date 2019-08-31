
var request = require('request');

request('https://my-json-server.typicode.com/typicode/demo/comments', function(err, response, body){
		if(!err && response.statusCode == 200){
			var parsedData = JSON.parse(body)
			//console.log(typeof body);
			//console.log(parsedData["query"]["result"]); // used for drill down  the object{query : {result : {count : 2}}}
			console.log(parsedData);
		}
})