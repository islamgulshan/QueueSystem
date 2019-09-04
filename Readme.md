
# Queue Management System 

## Signup user POST
  

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




## Login user POST
  

#### URL For access 


login


#### Json Fromat

{
	"email":"islam.gulshan2@gmail.com",
	"password":"abc123"
}


# generate Token

#### URL For access 



login


#### Json Fromat

	{
	"patientName" :"gulshan",
	"price":200,
	"token":12
	}


##  Total sale of token by Dispenser id POST
  

#### URL For access 


api/total/sale/Dispenser










