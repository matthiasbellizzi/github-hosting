import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router) { }

  title = 'veterinary-clinic';


  logoutButton(): void {
      localStorage.setItem('isUserLoggedIn',"false");

      localStorage.removeItem('returnedRole');
      localStorage.removeItem('returnedUsername');
      localStorage.removeItem('returnedToken');

      this.router.navigate(['/login']);
      //localStorage.removeItem('isUserLoggedIn'); 
    }
}
 