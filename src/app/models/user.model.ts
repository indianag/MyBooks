export class User 
{
    public Id_user:number;
    public name: string;
    public last_name: string;
    public email: string;
    public photo: string
    public password: string;

    constructor(Id_user:number, name:string, last_name:string, email:string, photo:string, password:string){
        this.Id_user = Id_user;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.photo = photo;
        this.password = password;
    }

    public nombreCompleto():string{
        return this.name + " " + this.last_name
      }
}
