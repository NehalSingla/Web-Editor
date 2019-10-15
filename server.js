var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'/public'))) 

app.use(express.urlencoded({extended: true}))
app.use(express.json())		

app.post('/submitCode',function(req,res)
{
	console.log(req.body);
	res.send("data saved");
})

app.listen(8000);
console.log('Running on port 8000');