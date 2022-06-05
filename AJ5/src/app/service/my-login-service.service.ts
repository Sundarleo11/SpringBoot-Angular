import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLoginServiceService {

  constructor() { }


  validate(username:string, password:string):boolean
  {
    if(username==="Ravi"  && password==="cts")
    {
      return true;
    }
return false;


  }



}
