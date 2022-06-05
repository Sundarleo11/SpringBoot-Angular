import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDataServiceService } from '../service/data/flight-data-service.service';
export class Flight {

  constructor(
    public id: number,
    public type: string,
    public status: boolean,
    public journeyDate: Date,
    public price: number,
    public customerName: string
  ) {

  }
}
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit 
{
  msg:string

  flights:Flight[];

  constructor(private FlightDataService: FlightDataServiceService, private http: HttpClient, private router:Router) { }

  ngOnInit() {

    this.extractFlight();

  }
  extractFlight()
  {
    this.FlightDataService.retrieveFlights().subscribe(

      response => {
        console.log(response);
        this.flights = response;
        
      }



    );

  }
deleteFlightList(id) 
  {
    this.FlightDataService.deleteFlight(id).subscribe(
   response =>
   {
   console.log(response);
   this.msg=`${id} sucessfully deleted`;

   }

    )
    
    
    console.log('deleted sucessfully');
  }
  
   updateFlightList(id)
   {
     console.log(`${id}  is going for for update....`);
     this.router.navigate(['Flight', id])
   }
   //calling addFlight() method to save file
   addFlight()
   {
     this.router.navigate(['Flight', -1])
   }
   
}
