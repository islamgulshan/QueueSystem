import { Component, OnInit } from '@angular/core'; 
 
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
   

  values = '';
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
   

}