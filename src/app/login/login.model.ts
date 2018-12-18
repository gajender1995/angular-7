export class LoginModel {
    name : String='';
    email : String ='';
    address:Address;
    constructor( name : string, email : string, address:Address){
      this.name = name;
      this.email=email;
      this.address=address;
    }

    fullAddress() {
        return this.address;
    }

}
//todo 
interface Address {
    city : string,
    zipcode : string
}
