export class Appointment {
    _appointmentId: number;
    _ownerIdCardNumber: string;
    _patientName: string;
    _animalType: string;
    _ownerName: string;
    _ownerSurname: string;
    _appointmentDate: string;
    _appointmentDuration: number;
    _appointmentTime: number;
    _ownerContactNumber: number;
    _reasonForAppointment: string;
    _vetNotes: string;

    constructor(
        ownerIdCardNumber: string, 
        patientName: string, 
        animalType: string,
        appointmentDate:string,
        ownerName: string, 
        ownerSurname: string, 
        appointmentDuration: number, 
        appointmentId:number,
        appointmentTime:number,
        ownerContactNumber:number,
        reasonForAppointment: string,
        vetNotes:string
        ) {
        this._ownerIdCardNumber = ownerIdCardNumber;
        this._patientName = patientName;
        this._animalType = animalType;
        this._ownerName = ownerName;
        this._ownerSurname = ownerSurname;
        this._appointmentDate = appointmentDate;
        this._appointmentDuration = appointmentDuration;
        this._appointmentId = appointmentId;
        this._appointmentTime = appointmentTime;
        this._ownerContactNumber = ownerContactNumber;
        this._reasonForAppointment= reasonForAppointment;
        this._vetNotes = vetNotes;
    }
    
    get ownerIdCardNumber(): string {
        return this._ownerIdCardNumber;
    }

    set ownerIdCardNumber(ownerIdCardNumber:string) {
        this._ownerIdCardNumber = ownerIdCardNumber;
    }

    
    get patientName(): string {
        return this._patientName;
    }

    set patientName(patientName:string) {
        this._patientName = patientName;
    }


    get animalType(): string {
        return this._animalType;
    }

    set animalType(animalType:string) {
        this._animalType = animalType;
    }


    get ownerName(): string {
        return this._ownerName;
    }

    set ownerName(ownerName:string) {
        this._ownerName = ownerName;
    }      


    get ownerSurname(): string {
        return this._ownerSurname;
    }

    set ownerSurname(ownerSurname:string) {
        this._ownerSurname = ownerSurname;
    }   
    

    get appointmentDate(): string {
        return this._appointmentDate;
    }

    set appointmentDate(appointmentDate: string){
        this._appointmentDate = appointmentDate;
    }


    get appointmentDuration(): number {
        return this._appointmentDuration;
    }

    set appointmentDuration(appointmentDuration: number){
        this._appointmentDuration = appointmentDuration;
    }


    get appointmentId(): number {
        return this._appointmentId;
    }

    set appointmentId(appointmentId:number) {
        this._appointmentId = appointmentId;
    }


    get appointmentTime(): number {
        return this._appointmentTime;
    }

    set appointmentTime(appointmentTime:number) {
        this._appointmentTime = appointmentTime;
    }
    


    get ownerContactNumber(): number {
        return this._ownerContactNumber;
    }

    set ownerContactNumber(ownerContactNumber:number) {
        this._ownerContactNumber = ownerContactNumber;
    }


    get reasonForAppointment(): string {
        return this._reasonForAppointment;
    }

    set reasonForAppointment(reasonForAppointment:string) {
        this._reasonForAppointment = reasonForAppointment;
    }


    get vetNotes(): string {
        return this._vetNotes;
    }

    set vetNotes(vetNotes:string) {
        this._vetNotes = vetNotes;
    }
}