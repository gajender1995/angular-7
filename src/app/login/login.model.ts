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
interface Geo{
    lat: string,
    lng: string
}

interface Address {
    city : string,
    zipcode : string,
    geo: Geo
}
