import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';
import { SucessComponent } from './sucess/sucess.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
{path :'', component:LoginComponent},
{path : 'login' , component :LoginComponent},
{path :'sucess', component :SucessComponent},
{path :'sucess/:name', component :SucessComponent},
{path :'Flight/:id', component :UpdateFlightComponent},
{path :'listOfFlight', component :FlightComponent},
{path :'**', component :ErrorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
