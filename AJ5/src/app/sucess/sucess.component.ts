import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightServiceService } from '../service/DataService/flight-service.service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  name:string='Ankit'
  fid:number=0
  ftype:string=''
  fprice:number=0
  errorMsg=''
  pathName:string;
  constructor(private route:ActivatedRoute, private dservice:FlightServiceService, private http:HttpClient) { }

  ngOnInit() {
//this.getFlightDetais();
//this.getFlightDetaisWithURL();
this.name=this.route.snapshot.params['name']
this.getFlightDetaisWithURL();

  }



/*getFlightDetais()
{
this.dservice.callMyFlightBean().subscribe(
response=>this.getResponse(response),
error=>this.dealWithError(error)

);


}*/

dealWithError(error)
{
  console.log(error)
  console.log(error.error)
  this.errorMsg=error.error.message;
  

}

getFlightDetaisWithURL()
{
this.dservice.callMyFlightBeanWithPathName(this.name).subscribe(
response=>this.getResponse(response),
error=>this.dealWithError(error)

);


}
getResponse(response)
{
this.fid=response.id;
this.ftype=response.type
this.fprice=response.price
this.pathName=response.customerName;
console.log(response)
console.log(response.id)
console.log(response.type)
console.log(this.pathName)

}

}
