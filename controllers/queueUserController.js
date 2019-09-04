var jwt= require("jsonwebtoken");
const queueuUserSchema=require('../models/queue_user');
var bcrypt=require("bcrypt-node");
 // Queue user insert 
const queueuUserSignUp =( req,res)=>{
	
	let NewqueueuUser = new queueuUserSchema(); 
	NewqueueuUser.name=req.body.name;
	NewqueueuUser.email=req.body.email;
	NewqueueuUser.phone=req.body.phone;
	NewqueueuUser.user_type=req.body.user_type;
	NewqueueuUser.password=req.body.password;
	 
	NewqueueuUser.save( (err,userinfo) => {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				userinfo
			})
		}
	})
}

 // Queue user  Login 
 const queueUserLogin =( req,res)=>{
	 
	// fetch user and test password verification
	queueuUserSchema.findOne({ email: req.body.email }, function(err, user) {
		if(err){
			res.status(500).json({
				message: "error",
				err
			})
		}
		else{  

		
			user.comparePassword(req.body.password, function(err, isMatch) {
				if(err){
					res.status(500).json({
						message: "error",
						err
					})
				}else{

					jwt.sign({user},'secretkey',{ expiresIn:'3000s'},(err,token)=>{
						 
						if(err){
							res.status(500).json({
								message: "error",
								err
							})
						}else{
							res.status(200).json({
								message: "Login Successfully",
								token,user
							})
						}

					})
					 
				}
				
			});
	
		 
			
		}

	
	});
 }	


// Module Exports
module.exports={
	queueuUserSignUp,
	queueUserLogin
}