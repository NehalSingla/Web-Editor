 var express = require('express');
var app = express();
var path = require('path');
var port=process.env.PORT || 3000
app.use(express.static(path.join(__dirname,'/public'))) 

app.use(express.urlencoded({extended: true}))
app.use(express.json())		

app.post('/submitCode',function(req,res)
{
	console.log(req.body);
	res.send("data saved");
})

app.listen(port,()=>{
	console.log('Running on port ' + port);
});
