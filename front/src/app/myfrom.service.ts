import { Injectable } from '@angular/core';

import{ Http, Headers } from '@angular/http';
import { map } from  'rxjs/operators';

import { MyForm } from "./reservation/Myform"; 
import { headersToString } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class MyfromService {

  constructor( private _http : Http) { }

    // Get all Reservation
    getAllreservation (){

      return this._http.get('http://localhost:3000/api/get_all_reservation').pipe(map(res=>res.json()));
    
    
    }


    // save data 
    addreservation(newreservation){    
      var header = new Headers();
      header.append("Content-Type", "application/json");
      return this._http
        .post("http://localhost:3000/api/add_reservation", newreservation)
        .pipe(map(res => res.json()));
  }

  editreservation (id){

    return this._http.get('http://localhost:3000/api/getReservationId/${id}').pipe(map(res=>res.json()));
  
  
  }



  getreservationbyid(id){    
    var header = new Headers();
    header.append("Content-Type", "application/json");
    var data={
      id:id
    }
    return this._http
      .post("http://localhost:3000/api/getReservationId", data)
      .pipe(map(res => res.json()));
}

  //  // Delete Reservation 
   deletereservation(id){  
    var header = new Headers();
    header.append("Content-Type", "application/json");
    // var data={
    //   id:id
    // }
    return this._http
      .delete("http://localhost:3000/api/deleteReservation/"+id)
      .pipe(map(res => res.json()));
   }


   /// Update Record 

   editreservationrecord(editrecord){    
    var header = new Headers();
    header.append("Content-Type", "application/json");
    return this._http
      .put("http://localhost:3000/api/updatReservation", editrecord)
      .pipe(map(res => res.json()));
}



}
