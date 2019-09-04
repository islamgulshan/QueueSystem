const enrollementSchema=require('../models/tokenEnrollment');
var moment =require("moment"); 
// Add Enrollement 
const AddEnrollement =( req,res)=>{
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	 
	enrollementSchema.findOne({createdDate: {$gte: today}}).sort({$natural: -1}).limit(1).exec(function(err, ress){

		if(ress==null){
			var token= 1;
		}else{
			var token= ress.token+1;
		}
		  
		let NewEnrollement = new enrollementSchema(); 
		NewEnrollement.patientName=req.body.patientName;
		NewEnrollement.price=req.body.price;
		NewEnrollement.token =token;
	
	NewEnrollement.user_type=req.auData.user._id;

	NewEnrollement.save( (err,Enrollement) => {
		
		if(err){
			res.status(500).json({
				message: "Some issue on sever",
				err
			})
		}
		else{
			res.status(200).json({
				message: "data save successfully",
				Enrollement
			})
		}
	})

		 
		 
	  });
 
	
}



const totalPatientName= (req,res)=>{
	
	enrollementSchema.aggregate([
		{
			$group:
			  {
				"_id": null,
				"patientName": { "$first": req.body.patientName }, 
				totalAmount: { $sum: "$price" },
				count: { $sum: 1 }
			  }
		  }
          
	  ],function (err, result) {
			if(err){
				res.send(err);
			}
			else{
				res.status(200).json({
					message: "data get successfully",
					result
				})
			}
		}
    )	

}



// beytwwn date 
const years = (req,res)=>{
	

	var yearsa= parseInt(req.body.years);
	
	enrollementSchema.aggregate([
	
		{
		"$project": {
			"year":{"$year":"$createdDate"}     
		  }
		},
		  { 
			"$match":{
	   
			  "year" :     yearsa
			}

			}],function (err, result) {
					if(err){
						res.send(err);
					}
					else{
						res.status(200).json({
							message: "data get successfully",
							result
						})
					}
				}
			)	

}



const month = (req,res)=>{

  
	var month = req.body.months;
  
	const monthQuery = [
	  {
		$project: {
		  month: { $month: "$createdDate" }
		}
	  },
	  {
		$match: {
		  month: month
		}
	  }
	];
	enrollementSchema.aggregate(monthQuery, function(err, result) {
	  if (result != "") {
		if (err) {
		  console.log(err);
		} else {
		  res.status(200).json({
			result: result
		  });
		  // console.log(result);
		}
	  } else {
		res.status(403).json({
		  error: "No record found"
		});
	  }
	});	
		
	
	}

// beytwwn date 
const betweendate = (req,res)=>{

 
var startdate=moment(req.body.startdate).format('YYYY,MM,DD').toString();
var endDate=moment(req.body.endDate).format('YYYY,MM,DD').toString();
 
enrollementSchema.aggregate( [{
	"$match": {
		"createdDate": { "$gte": new Date(startdate), "$lte": new Date(endDate) }
	},
		},{
			$group : {
				_id : null,
				total : {
					$sum : "$price"
				}
			}
		}],function (err, result) {
				if(err){
					res.send(err);
				}
				else{
					res.status(200).json({
						message: "data get successfully",
						result
					})
				}
			}
		)	
	

}

//totalSaleDate
const totalSaleDate= (req,res)=>{
	var start = moment().startOf("day"); // set to 12:00 am today
var end = moment().endOf("day"); // set to 23:59 pm today

enrollementSchema.aggregate( [{
			$match : { $and : [  {createdDate: { $gte: start, $lt: end } }] },
		},{
			$group : {
				_id : null,
				total : {
					$sum : "$price"
				}
			}
		}],function (err, result) {
				if(err){
					res.send(err);
				}
				else{
					res.status(200).json({
						message: "data get successfully",
						result
					})
				}
			}
		)	
	
}


const totalSaleDispenr= (req,res)=>{

	enrollementSchema.aggregate([
		 
		{ $group: { _id: req.body.user_type, amount: { $sum: "$price" } } }
	],function (err, result) {
		if(err){
			res.send(err);
		}
		else{
			res.status(200).json({
				message: "data get successfully",
				result
			})
		}
    });	

 
	
}

module.exports={
	AddEnrollement,
	totalSaleDate,
	totalSaleDispenr,
	totalPatientName,
	betweendate,
	years,
	month
}