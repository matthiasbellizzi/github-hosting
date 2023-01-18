import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Appointment } from './dto/appointment.dto';
import { AppointmentBooking } from '../services/appointment.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  //private _listFilter: string='';
  ngOnInit(): void {
    this.appointmentBooking.getAppointments().subscribe((resp: Appointment[]) => {
      this.appointments = resp;
    });
  }

  title = 'veterinary-clinic';
  appointments: Appointment[] = [];

  constructor(private appointmentBooking: AppointmentBooking) { }

  @ViewChild('content', { static: false }) el!: ElementRef;
  
  viewButton() {
    console.log('Detected a button click in VIEW');
  }

  updateButton() {
    console.log('Detected a button click in UPDATE');
  }

  deleteButton() {
    console.log('Detected a button click in DELETE');
  }

  
  exportexcel(): void
  {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    XLSX.writeFile(wb, 'ExcelSheet.xlsx');
  }

  exportpdf(): void {
    let pdf = new jsPDF()
    pdf.setFontSize(24);
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("PDFSheet.pdf")
      }
    })
  }
}
