export class LoginModel {
    constructor(
        public name : String,
        public email : String 
    ){}

    fullAddress() {
        return this.name;
        // i want name + city here 
    }

}
//todo 
interface address {
    city : string,
    zipcode : string
}