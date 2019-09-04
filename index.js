var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var jwt= require("jsonwebtoken");


const queueUserController= require('./controllers/queueUserController');


mongoose.connection.openUri('mongodb://localhost:27017/QueueSystem', { useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
	console.log('coonected To db ');
})

mongoose.connection.on('error',(err)=>{
	if(err){
		console.log(`error while connection to db ${err}`);
	}
})

var router =require('./routes/user');

const port = 3000;

var app = express();
app.use(cors());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));
//

app.use('/api',varifyToken, router);

app.use('/signup', queueUserController.queueuUserSignUp);

app.use("/login",queueUserController.queueUserLogin);

app.use('/', (req,res)=>{
	res.send('git my name HELLO  ');
	
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// varify token
function varifyToken(req,res,next){
	const bearHeader= req.headers['authorization'];
	// check if bearer is undefined 
	if (typeof bearHeader !='undefined'){
		//splite at a space
		const bearer=bearHeader.split(' ');
		//get token from array
		const bearerToken=bearer[1];
		//ret token
		req.token= bearerToken;
		// next middleware
		jwt.verify(req.token,'secretkey', (err,auData) => {
			if(err){
				res.status(403).send(err);
				//res.sendStatus(403);
			}else{
				req.auData=auData;
				next();
			}
		});
	}else{
		res.status(403).json({
			msg : "Forbidden"
		})
	}	
}




// Heroku 
// app.listen(process.env.PORT || port , () => {
//   console.log(`listening on port ${port}`);
// });

// Openshift


// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
// server.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });

//cler
// const http = require('http');

// // Configure our HTTP server to respond with Hello World to all requests.
// const server = http.createServer((request, response) => {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });

// // Last, but not least, listen on port 8080
// // The environment variable PORT is automatically defined and equals to 8080
//server.listen(process.env.PORT, '0.0.0.0');