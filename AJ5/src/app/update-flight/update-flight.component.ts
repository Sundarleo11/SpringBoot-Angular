import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight/flight.component';
import { FlightDataServiceService } from '../service/data/flight-data-service.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
id:number;
flight:Flight;
  constructor(private route:ActivatedRoute, private FlightDataServ:FlightDataServiceService, private router:Router) { }
//This method is extracting the id from the url and assigning into id memner variable which is declared inside this component
//This methods calling the service method which is defined inside the FlightDataService using id and subscribing the request
//getting the response and intializing into flight object Flight 
  ngOnInit() {

this.id=this.route.snapshot.params['id']
this.flight=new Flight(this.id,'',false,new Date(),0,'')
if(this.id!=-1)
{
this.FlightDataServ.retrieveFlightInfo(this.id).subscribe
(



  data=>
  {
    this.flight=data
    console.log(data);
  }
)
}



  }
  //This method is used to call service method which is updatting the Flight object with id and navigating this page into listofFlight path name which is mapping FlightList component
  saveUpdatedFlight()
  {
    if(this.id==-1)
    {

this.FlightDataServ.createFlightInfo(this.id,this.flight).subscribe
    
(

data => 
{
console.log(data)
this.router.navigate(['listOfFlight']);
}
)
    }else
    {
    this.FlightDataServ.updateFlightInfo(this.id,this.flight).subscribe
    
(

data => 
{
console.log(data)
this.router.navigate(['listOfFlight']);
}
)
} 
  }

}
