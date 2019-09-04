
# Queue Management System 

## Signup New Dispenser 
  

#### URL For access 


signup


#### Json Fromat


{
	"queue_users" :
	{
		{
			"name": "gulshan islam",
			"email":"islam.gulshan2@gmail.com",
			"phone":"0092 335 3443510",
			"user_type":2,
			"password":"abc123"
		}
	}
}




## Login User POST and Generate Token With JWT 
  

#### URL For access 


login


#### Json Fromat

{
	"email":"islam.gulshan2@gmail.com",
	"password":"abc123"
}


# generate  Token With Login user Id 

#### URL For access 


api/generate/token


#### Json Fromat

	{
	"patientName" :"gulshan",
	"price":200 
	}


##  Total sale of token by Dispenser id POST
  

#### URL For access 


api/total/sale/Dispenser

#### jSon Format

{
		"user_type":"5d6d125222800f1c60ea7cbd"
	
}


##  Total sale of token by Patient Name
  

#### URL For access 


api/total/sale/patientName

#### jSon Format

{
		"patientName":"gulshan"
	
}



 ##  Total sale of year 
  

#### URL For access 


api/total/sale/years

#### jSon Format

{
		"years":2019
	
}


 ##  Total sale of Month 
  

#### URL For access 


api/total/sale/month

#### jSon Format

{
		"months":9
	
}

















