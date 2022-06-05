import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class callMyFlightBean{
constructor(public id:number, public type:string, public price:number , public customerName:string )
{

}


}



@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor(private http:HttpClient) { }


callMyFlightBean()
{
return this.http.get<callMyFlightBean>('http://localhost:2300/flight-bean')
}

callMyFlightBeanWithPathName(name)
{
  return this.http.get<callMyFlightBean>(`http://localhost:2300/flight-bean/path-var/${name}`)
}

}
