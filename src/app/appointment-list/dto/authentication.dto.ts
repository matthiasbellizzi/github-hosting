export class Authentication {
    _email: string;
    _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }
    
    get email(): string {
        return this._email;
    }

    set ownerIdCardNemailumber(email:string) {
        this._email = email;
    }

    get password(): string {
        return this._password;
    }

    set password(password:string) {
        this._password = password;
    }

}


