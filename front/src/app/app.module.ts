import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule, FormGroup,ReactiveFormsModule } from '@angular/Forms';
 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
 
import { CrudComponent } from './crud/crud.component';

import { ReservationComponent } from './reservation/reservation.component';

import { SVGLoadderComponent } from './svgloadder/svgloadder.component';
 
import { NgxSpinnerModule } from "ngx-spinner";

import { SVGLoadder2Component } from './svgloadder2/svgloadder2.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
 
@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      CrudComponent,
      ReservationComponent,
      SVGLoadderComponent,
      AutocompleteComponent	  
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
	  ReactiveFormsModule,
	  NgxSpinnerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      NavigationComponent 
   ]
})
export class AppModule { }
