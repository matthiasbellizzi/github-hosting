import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Authentication} from "../appointment-list/dto/authentication.dto";
import { AppointmentBooking} from "../services/appointment.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


  export class LoginComponent implements OnInit {

    isUserLoggedIn: boolean = false;
    //private _isLoggedin$ = new BehaviorSubject<boolean>(false)
    //$isLoggedin = this._isLoggedin$.asObservable();

    appForm!: FormGroup;
    authentication!: Authentication;
  
    constructor(
      private formBuilder: FormBuilder, 
      private authenticationService: AppointmentBooking,
      private router: Router) { }
  
    ngOnInit(): void {
      this.appForm = this.formBuilder.group({
        username: ['',[Validators.required]],
        password:['',[Validators.required]]
      }); 
    }
  
    loginBtn() {
      this.authentication = this.appForm.value;
      console.log("login input");
      console.log(this.authentication);
        
      this.authenticationService.createAuthenticationToken(this.authentication).subscribe((res: any) => {
        this.authentication = res;

        if(localStorage.getItem(res)){
          localStorage.setItem('returnedRole', res.role);
          localStorage.setItem('returnedUsername', res.username);
          localStorage.setItem('returnedToken', res.jwtToken)
          localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "false" : "true"); 
          //const $isrole = localStorage.getItem('isUserLoggedIn');
          this.router.navigate(['/appointment-list']);
        }else{
          console.log("login failed");
        }
      })
    }
}


// user: test.vet@pethealth.com          pw: Pa$$w0rd role: vet
// user: test.receptionist@pethealth.com pw: Pa$$w0rd role: receptionist
// user: test.admin@pethealth.com        pw: Pa$$w0rd role: admin

 //curl -X POST "http://localhost:8080/authenticate" 
  //-H  "accept: */*" -H  "Content-Type: application/json" 
  //-d "{  \"password\": \"Pa$$w0rd\",  \"username\": \"test.vet@pethealth.com\"}"

  //curl -X POST "http://localhost:8080/appointment" 
  //-H  "accept: */*" -H  "Content-Type: application/json" 
  //-d "{  \"animalType\": \"string\",  \"appointmentDate\": \"string\",  \"appointmentDuration\": 0,  
  //\"appointmentTime\": \"string\",  \"ownerContactNumber\": \"string\",  \"ownerIdCardNumber\": \"string\",  
  //\"ownerName\": \"string\",  \"ownerSurname\": \"string\",  \"patientName\": \"string\",  
  //\"reasonForAppointment\": \"string\",  \"vetNotes\": \"string\"}"

  //curl -X GET "http://localhost:8080/appointment"
  // -H  "accept: */*" 
  // -H  "Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LnZldEBwZXRoZWFsdGguY29tIiwiZXhwIjoxNjczMDkzNjc4LCJpYXQiOjE2NzMwNzU2Nzh9.tD0ZY6jLI0IIFuEuhjr5Wl8mVLHtSyZZhzakJqT3wfle13qXm2zcsbDkfruQjtSQ8By3CMc7zK-fLrlMlNwCAA"
