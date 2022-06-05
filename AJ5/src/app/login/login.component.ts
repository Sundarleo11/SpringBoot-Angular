import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyLoginServiceService } from '../service/my-login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=""
  uname=''
  password="pass123"
  invalidLogin:boolean=false
  errorMessage="OOPS some problem"
 //dependency Injection
 
 


  constructor(private router :Router,private myservice:MyLoginServiceService) { }

  ngOnInit() {
  }
  checkLogin():void{
    //console.log(this.username)
    if(this.myservice.validate(this.username, this.password))
    {
      //Redirect 
      //this.uname=this.route.snapshot.params['name']
     this.router.navigate(['sucess',this.username])
      console.log(this.username)
    this.invalidLogin=false;

    }
    else
    {
      this.invalidLogin=true;
    }

  }

}
