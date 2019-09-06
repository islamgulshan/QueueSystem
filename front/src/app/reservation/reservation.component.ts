import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

	public reservations = Array();
	public name : any;
	public email: any;
	public arrival_date: string;
	public deprate_date: string;
	public no_of_guest: string;
	public free_packup='';
	public flight_number: string;
	public Roomtype : string;
	public specail_requests:string;
	public roomTypelist =['class A','class B','class C']  ;
	public edit = '';
	public isDone=1;
	
	constructor() {
		
	}  
	ReservationDelete(i)
	{
	  this.isDone=1;
	  this.edit = '';
	  this.reservations.splice(i,1);
	  this.name= '';
	  this.email= '' ;
	  this.Roomtype= '' ;
	  this.arrival_date='';
	  this.deprate_date='';
	  this.no_of_guest='';
	  this.free_packup='';
	  this.flight_number='';
	  this.specail_requests='';
	}
	
	AddReservation() {
    
	let reservations = {
      name: this.name,
	  email: this.email,
	  Roomtype: this.Roomtype,
	  arrival_date: this.arrival_date,
	  deprate_date: this.deprate_date,
	  no_of_guest: this.no_of_guest,
	  flight_number:this.flight_number,
	  specail_requests:this.specail_requests,
	  free_packup:this.free_packup
    };
	  
	  this.reservations.push(reservations);
	  this.name= '';
	  this.email= '' ;
	  this.Roomtype= '' ;
	  this.arrival_date='';
	  this.deprate_date='';
	  this.no_of_guest='';
	  this.free_packup='';
	  this.flight_number='';
	  this.specail_requests='';
	   
  }
 
  //Edit Reservation 
  ReservationEdit(i){
		this.isDone=0;
		this.edit = i;
        this.name  = this.reservations[i].name,
	    this.email = this.reservations[i].email,
		this.Roomtype = this.reservations[i].Roomtype,
		this.arrival_date = this.reservations[i].arrival_date,
		this.deprate_date = this.reservations[i].deprate_date,
		this.no_of_guest = this.reservations[i].no_of_guest,
		this.free_packup = this.reservations[i].free_packup,
		this.flight_number = this.reservations[i].flight_number,
		this.specail_requests = this.reservations[i].specail_requests
		
  }
  
  updateReservation(){
	  this.reservations[this.edit].name =this.name;
	  this.reservations[this.edit].email =this.email;
	  this.reservations[this.edit].Roomtype =this.Roomtype;
	  this.reservations[this.edit].arrival_date =this.arrival_date;
	  this.reservations[this.edit].deprate_date =this.deprate_date;
	  this.reservations[this.edit].no_of_guest =this.no_of_guest;
	  this.reservations[this.edit].free_packup =this.free_packup;
	  this.reservations[this.edit].flight_number =this.flight_number;
	  this.reservations[this.edit].specail_requests =this.specail_requests;
	  this.isDone=1;
	  this.edit = '';
	  this.name= '';
	  this.email= '' ;
	  this.Roomtype='';
	  this.arrival_date= '' ;
	  this.deprate_date= '' ;
	  this.no_of_guest= '' ;
	  this.free_packup='';
	  this.flight_number='';
	  this.specail_requests='';	  
  }
  
  

 
 
 // ReservationDelete
  

  ngOnInit() {}
}
