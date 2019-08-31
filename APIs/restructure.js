//npm i request-promise
var rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
	.then((response)=>{
		console.log(typeof response);
	
	})
	.catch((err) => {
		console.log('err', err);
	});
	