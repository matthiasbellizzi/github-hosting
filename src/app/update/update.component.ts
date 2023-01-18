import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../appointment-list/dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  appForm!: FormGroup;
  appointment!: Appointment;

  constructor(
    private route: ActivatedRoute,
    private appointmentBooking: AppointmentBooking,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));

    console.log(id);

    this.appointmentBooking.getAppointmentById(id).subscribe((result: Appointment) => {
      this.appointment = result;
      //console.log(result.ownerIdCardNumber);
        this.appForm = this.formBuilder.group({
        animalType: new FormControl(result.animalType),
        appointmentDate:new FormControl(result.appointmentDate),
        appointmentDuration: new FormControl(result.appointmentDuration),
        appointmentTime: new FormControl(result.appointmentTime),
        ownerContactNumber: new FormControl(result.ownerContactNumber),
        ownerIdCardNumber: new FormControl(result.ownerIdCardNumber),
        ownerName: new FormControl(result.ownerName),
        ownerSurname: new FormControl(result.ownerSurname),
        patientName: new FormControl(result.patientName),
        reasonForAppointment: new FormControl(result.reasonForAppointment),
        vetNotes: new FormControl(result.vetNotes)
        })
    }); 
  }


  submitForm() {
    const format = "dd/MM/yyyy"
    const locale = 'en-US'
    this.appointment = this.appForm.value;
    console.log(this.appointment);
    //if date is changed, use this
    //this.appointment.appointmentDate = formatDate(this.appointment.appointmentDate,format, locale);
    this.appointmentBooking.updateAppointment(this.appointment).subscribe((res: Appointment) => {
      this.appointment = res;
      //console.log(JSON.stringify(this.appointment));
    })
  }
}
