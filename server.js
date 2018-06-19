var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

var publicPath = path.resolve(__dirname, "static");
app.use(express.static(publicPath));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(8000, function(){
	console.log('listening at Port 8000');
});

app.get('/', function(req, res){
	res.sendFile(`${publicPath}/index.html`);
});
