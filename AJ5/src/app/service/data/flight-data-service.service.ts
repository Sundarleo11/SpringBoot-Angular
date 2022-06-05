import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from 'src/app/flight/flight.component';

@Injectable({
  providedIn: 'root'
})
export class FlightDataServiceService {

  constructor(private http:HttpClient) { }

 retrieveFlights()
 {

return this.http.get<Flight[]>(`http://localhost:2300/user/Ram/flights`)
 }

deleteFlight(id)
{
  return this.http.delete(`http://localhost:2300/user/Ram/flights/${id}`)
}
retrieveFlightInfo(id)
{

  return this.http.get<Flight>(`http://localhost:2300/user/Ram/flights/${id}`)
}
updateFlightInfo(id, flight)
{
return this.http.put(`http://localhost:2300/user/Ram/flights/${id}`,flight )

}
createFlightInfo(id, flight)
{
return this.http.post(`http://localhost:2300/user/Ram/flights/${id}`,flight )

}

}
