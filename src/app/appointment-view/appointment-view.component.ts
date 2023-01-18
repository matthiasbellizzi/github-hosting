import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment-list/dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {
 
  appointments?: Appointment;

  constructor(
    private route: ActivatedRoute,
    private appointmentBooking: AppointmentBooking,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(id);
    this.appointmentBooking.getAppointmentById(id).subscribe((res: Appointment) => {
      this.appointments = res;
    });
  }

  onBackButtonClick() {
    this.router.navigate(['/appointment-list']);
  }
}
  