import { Component, OnInit } from '@angular/core'; 

import {FormControl} from '@angular/forms';

import {AppService} from './app.service'

import { tap, startWith, debounceTime, switchMap, map } from "rxjs/operators";

import { Observable } from "rxjs";
 
 
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent{
	 
//   myControl = new FormControl();
//   options = [];
//   filteredOptions: Observable<any[]>;

//   constructor(private apiService: AppService) {} 
   

// ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(""),
//       debounceTime(400),
//       switchMap(value => this.search(value))
//     );
//   }

//   search(value) {
//     return this.apiService.get_record().pipe(
//       map(response =>
//         response.filter(option => {
//           return option.word.toLowerCase().indexOf(value.toLowerCase()) === 0;
//         })
//       )
//     );
//   }
}