import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors } from '@angular/Forms';

import {  MyfromService } from '../myfrom.service';
import {  MyForm } from './Myform';
import * as moment from 'moment';


 
 
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ MyfromService]

})
export class ReservationComponent implements OnInit {
	public reservation : MyForm[];
	public isDone=1;
	public roomTypelist=["class A", "Class B"];
	constructor ( private _myservice :MyfromService){}
	
	ngOnInit() {
		this._myservice.getAllreservation().subscribe( res =>  this.reservation=res)
		 
	 
		//   this.spinner.show();
	 
		// setTimeout(() => {
		//   /** spinner ends after 5 seconds */
		//   this.spinner.hide();
		// }, 1000);  
	  }



	public reservationform = new FormGroup({
		name: new FormControl("", [
								Validators.required,
								Validators.minLength(5)
								]
							)
								,
		email: new FormControl("", [
								Validators.required,
								Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
								]
							),
							
		Roomtype: new FormControl("", Validators.required),
		arrival_date: new FormControl("", [
											Validators.required,
											Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')
											]),
		deprate_date: new FormControl("", [
											Validators.required,
											Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')
											]),		
		no_of_guest: new FormControl("",Validators.required),
		free_packup: new FormControl("",Validators.required),		
		
		flight_number: new FormControl("", Validators.required),
		specail_requests: new FormControl("", Validators.required)							
	})
	
	//Get Name Getters
	
	  get name() {
		return this.reservationform.get("name");
	}

	// Getters
	get email() {
		return this.reservationform.get("email");
	}
	
	//Get Name Getters
	
	get Roomtype() {
		return this.reservationform.get("Roomtype");
	}
	
	//Get Name Getters
	
	get arrival_date() {
		return this.reservationform.get("arrival_date");
	}
	
	
	get deprate_date() {
		return this.reservationform.get("deprate_date");
	}
	
	// Getters for number of guest
	get no_of_guest() {
		return this.reservationform.get("no_of_guest");
	}
	
	// Getters for number of guest
	get free_packup() {
		return this.reservationform.get("free_packup");
	}
	
	
	
	 
	
	// Getters for number of guest
	get flight_number() {
		return this.reservationform.get("flight_number");
	}
	
	// Getters for number of guest
	get specail_requests() {
		return this.reservationform.get("specail_requests");
	}
	
// 	constructor(private spinner: NgxSpinnerService) {}
	
 	ReservationDelete(i)
 	{
	 // console.log(i);
	  
	this._myservice.deletereservation(i).subscribe(result => {
		this.reservation.splice(i,1);	
		//this.reservation.push(result.reservationn);
	});


	  this.isDone=1;
	 
 	}
	
 	AddReservation() {
    
	let reservationsadd = {
		name: this.reservationform.value.name,
		email: this.reservationform.value.email,
		Roomtype: this.reservationform.value.Roomtype,
		arrival_date: this.reservationform.value.arrival_date,
		deprate_date: this.reservationform.value.deprate_date,
		no_of_guest: this.reservationform.value.no_of_guest,
		flight_number:this.reservationform.value.flight_number,
		specail_requests:this.reservationform.value.specail_requests,
		free_packup:this.reservationform.value.free_packup
    };
		
	  
	this._myservice.addreservation(reservationsadd).subscribe(result => {
		
			this.reservation.push(result.reservationn);
		});

  	  
 	  this.reservationform.reset(); 
	   
   }
   
   public editId = "";

	  //Edit Reservation 
	  ReservationEdit(id, actualId){
		this.isDone=0; 
		var arrivalDate = moment(this.reservation[id].arrival_date).format("YYYY-MM-DD");
		var deprate_date = moment(this.reservation[id].deprate_date).format("YYYY-MM-DD");
		this.reservationform.get("name").setValue(this.reservation[id].name);
		this.reservationform.get("email").setValue(this.reservation[id].email)
		this.reservationform.get("Roomtype").setValue(this.reservation[id].room_type)
		this.reservationform.get("arrival_date").setValue(arrivalDate)
		this.reservationform.get("deprate_date").setValue(deprate_date)
		this.reservationform.get("no_of_guest").setValue(this.reservation[id].no_of_guest)
		this.reservationform.get("flight_number").setValue(this.reservation[id].flight_number)
		this.reservationform.get("specail_requests").setValue(this.reservation[id].specail_requests)
		this.reservationform.get("free_packup").setValue(this.reservation[id].free_packup)	


		this.editId = actualId
			
	  }
  
	  updateReservation(){
		
		var data = {
			id : this.editId,
			contact : {
				name: this.reservationform.value.name,
				email: this.reservationform.value.email,
				Roomtype: this.reservationform.value.Roomtype,
				arrival_date: this.reservationform.value.arrival_date,
				deprate_date: this.reservationform.value.deprate_date,
				no_of_guest: this.reservationform.value.no_of_guest,
				flight_number:this.reservationform.value.flight_number,
				specail_requests:this.reservationform.value.specail_requests,
				free_packup:this.reservationform.value.free_packup
			}
		}

		// console.log(data);

		// return false;
		

		this._myservice.editreservationrecord(data).subscribe(result => {
		
			this.reservation.push(result.reservationn);
		});

// 		  this.reservations[this.edit].name =this.reservationform.value.name;
// 		  this.reservations[this.edit].email =this.reservationform.value.email;
// 		  this.reservations[this.edit].Roomtype =this.reservationform.value.Roomtype;
// 		  this.reservations[this.edit].arrival_date =this.reservationform.value.arrival_date;
// 		  this.reservations[this.edit].deprate_date =this.reservationform.value.deprate_date;
// 		  this.reservations[this.edit].no_of_guest =this.reservationform.value.no_of_guest;
// 		  this.reservations[this.edit].free_packup =this.reservationform.value.free_packup;
// 		  this.reservations[this.edit].flight_number =this.reservationform.value.flight_number;
// 		  this.reservations[this.edit].specail_requests =this.reservationform.value.specail_requests;
// 		  this.isDone=1;
// 		  this.edit = '';
// 		  this.reservationform.reset();
		 	  
 	 }
  
  

 
 
 // ReservationDelete
  

  
}
