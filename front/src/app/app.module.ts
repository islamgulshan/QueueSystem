import { NgModule } from '@angular/core';
import { FormsModule, FormGroup,ReactiveFormsModule } from '@angular/Forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CrudComponent } from './crud/crud.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReservationComponent } from './reservation/reservation.component';
import { SVGLoadderComponent } from './svgloadder/svgloadder.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SVGLoadder2Component } from './svgloadder2/svgloadder2.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatAutocompleteModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {AppService} from './autocomplete/app.service'

import { HttpClientModule } from "@angular/common/http";

import { HttpModule } from "@angular/http";
 
@NgModule({
   declarations: [
      AppComponent,  
      ReservationComponent,
      AutocompleteComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule,
      HttpClientModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      MatInputModule,
      BrowserAnimationsModule,
      HttpModule  
    ],
   providers: [AppService],
   bootstrap: [
      AppComponent,
      AutocompleteComponent,
	   ReservationComponent
   ]
})
export class AppModule { }
