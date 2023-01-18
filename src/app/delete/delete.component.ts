import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment-list/dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit{

  appForm!: FormGroup;
  appointment!: Appointment;

  constructor(
    private route: ActivatedRoute,
    private appointmentBooking: AppointmentBooking,
    private router: Router
  ) { }


  ngOnInit() {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    this.appointmentBooking.deleteAppointment(id).subscribe((res: Appointment) => {
      this.appointment = res;
      this.router.navigate(['/appointment-list']);
    });
  }

  
}
