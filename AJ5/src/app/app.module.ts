import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SucessComponent } from './sucess/sucess.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { FlightComponent } from './flight/flight.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateFlightComponent } from './update-flight/update-flight.component'

@NgModule({
  declarations: [
    AppComponent,
    SucessComponent,
    LoginComponent,
    ErrorComponent,
    FlightComponent,
    MenuComponent,
    FooterComponent,
    UpdateFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
