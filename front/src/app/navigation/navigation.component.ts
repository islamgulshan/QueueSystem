import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
	public box1='';
	  
	
	public menu= ['Home','About','Contact Us','Terms']
  constructor() { }

  ngOnInit() {
  }
  add(){
	  return eval(this.box1);
  }
  

}