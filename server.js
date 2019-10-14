var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname,'/public'))) 

app.post('/submitCode',function(req,res)
{
	console.log(req.body);
	res.send("data saved");
})
app.listen(8000);