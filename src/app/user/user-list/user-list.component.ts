import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private UserSvc: UserService) { }

  ngOnInit() {
    console.log("Getting user list ...");
    this.UserSvc.list()
      .subscribe(users => {
        this.users = users;
        console.log(users);
      })
  }

}
