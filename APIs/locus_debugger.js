const request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', (err, response, body) => {
	//npm i locus
	//eval(require('locus'));
		if(!err && response.statusCode == 200){
			const parsedData = JSON.parse(body)
			//console.log(typeof body);
			//console.log(parsedData['name']); 
			console.log(`${parsedData.name} + hi`);
		}
});