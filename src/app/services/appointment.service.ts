import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment } from "../appointment-list/dto/appointment.dto";
import { Authentication} from "../appointment-list/dto/authentication.dto";

@Injectable()
export class AppointmentBooking {
    //   }  
    
    endpoint: string = 'http://localhost:8080/appointment';
    end: string = 'http://localhost:8080/authenticate';
    
    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("returnedToken")
        })
    } 

    createAuthenticationToken(authentication: Authentication): Observable<Authentication>  {
        console.log(localStorage);

        console.log("From Service - API");
        console.log(JSON.parse(localStorage.getItem("returnedJSON")!));
        return this.httpClient.post<Authentication>(this.end, authentication);
    }
    
    constructor (private httpClient: HttpClient) {}

    getAppointments(): Observable<Appointment[]> {
        console.log(localStorage);
        return this.httpClient.get<Appointment[]>(this.endpoint, this.httpHeader);
    }

    getAppointmentById(id: number): Observable<Appointment> {
        return this.httpClient.get<Appointment>(this.endpoint + "/" + id, this.httpHeader);
    }

    addAppointment(appointment: Appointment): Observable<Appointment> {
        return this.httpClient.post<Appointment>(this.endpoint, appointment, this.httpHeader);
    }

    updateAppointment(appointment: Appointment): Observable<Appointment> {
        console.log(JSON.parse(localStorage.getItem("returnedJSON")!));
        return this.httpClient.put<Appointment>(this.endpoint, appointment, this.httpHeader);
    }

    deleteAppointment(id: number): Observable<any> {
        return this.httpClient.delete(this.endpoint + "/" + id);
    }
}  