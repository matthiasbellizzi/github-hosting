import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { HomeComponent } from './home/home.component';
import { AppointmentBooking } from './services/appointment.service';
import { AppRoutingModule } from './app-routing.module';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentViewComponent,
    HomeComponent,
    AddAppointmentComponent,
    UpdateComponent,
    DeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AppointmentBooking,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
