import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import {  FormControl } from '@angular/forms';
import { debounceTime , switchMap, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  result = new Array<User>();
  searchField = new FormControl('');
  loading : boolean = false;
  constructor(private userService: UserService) {

  }

  ngOnInit() {

    //value change api call
    this.searchField.valueChanges
    .pipe(
      debounceTime(500),
      tap( () => this.loading = true ),
      switchMap( (item) => this.userService.getUser(item)),
      tap( () => this.loading = false ),
      )

    
    .subscribe(item => {
      console.log(item);
      this.result = item;
      // if(!item) {return}
      // this.userService.getUser(item).subscribe((response) => {
      //   console.log(response);
      //   this.result = response;
      // })
    })
    


  }

}
