import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
 
import { CrudComponent } from './crud/crud.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      CrudComponent,
      ReservationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      NavigationComponent
   ]
})
export class AppModule { }
