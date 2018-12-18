import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data : any;
  constructor( private http : HttpClient ) { }

  getData() : Observable<LoginModel[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map( res => {
        this.data = res;
        return this.data.map( item => {
          return new LoginModel(
            item.name ,
            item.email
          )
        })
      })
    )

  }
}
