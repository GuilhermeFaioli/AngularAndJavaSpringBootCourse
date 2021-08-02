export class SalesPerson {
    
    constructor(private _firstName: string, private _lastName: string,
        private _email: string, private _salesVolume: number) {

    }

    public get salesVolume(): number {
        return this._salesVolume;
    }
    public set salesVolume(value: number) {
        this._salesVolume = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
}
