import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    //results : any;
    url = "https://itunes.apple.com/search?term=Gajender&media=music&limit=20";
    url1 = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}
  res : any;
  getUser(search : String) : Observable<User[]> {
    if(!search){
        search = "a";
    }
    return this.http.get(`https://itunes.apple.com/search?term=${search}&media=music&limit=10`).pipe( 
        map ( res => {
            this.res = res;
            return this.res.results.map(item => { 
                return new User(
                    item.artistId,
                    item.artistName,
                    item.artworkUrl60,
                    item.collectionName,
                    item.collectionViewUrl
                  );
            })
        }

        )
    )
  }
}