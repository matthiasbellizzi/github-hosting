import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  {
    path: 'appointment-list', 
    component: AppointmentListComponent},
  {
    path: 'appointment-list/:id', 
    component: AppointmentViewComponent,
  },
  {
    path: 'update/:id', 
    component: UpdateComponent,
  },
  {
    path: 'delete/:id', 
    component: DeleteComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'add-appointment',
    component: AddAppointmentComponent,
    canActivate: [AuthGuardGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

