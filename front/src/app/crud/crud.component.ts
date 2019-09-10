import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
 
 
 
export class CrudComponent implements OnInit {
  public students = Array();
  public name: string;
  public fName: string;
  public city: string;
  public mobileNumber: string;
  public cities = ["Peshawar", "Islamabad"];
  public selectedCity: string;
  public id = 1;
  
  constructor() {}

  DeleteStudent(id) {
    console.log(id);

    this.singleArrayRemove(this.students, id);
  }

  AddStudent() {
    let newStudent = {
      id: this.id++,
      name: this.name,
      fName: this.fName,
      mobileNumber: this.mobileNumber,
      selectedCity: this.city
    };

    this.students.push(newStudent);
  }

  singleArrayRemove(array, value) {
    var index = array.indexOf(value);
    if (index > -1) array.splice(index, 1);
    return array;
  }

  ngOnInit() {}
}


