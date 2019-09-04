const mongoose = require("mongoose");
 
const generatetokenchema=mongoose.Schema({
	
    patientName:{
        type:String

    },
    price:{
        type:Number
    },

    token: { 
            type: Number
           
     }
    ,
    user_type:{
        type : mongoose.Schema.Types.ObjectId,
        rel: "queue_users"

    },

    createdDate: { 
		type: Date, 
		default: Date.now()
     }
     

}

)

 


 




module.exports= mongoose.model('tokenEnrollment',generatetokenchema);



 



