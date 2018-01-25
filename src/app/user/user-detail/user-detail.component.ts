import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private UserSvc: UserService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.params.subscribe(params => id = params["id"]);
    console.log("id is ", id);
    console.log("Getting user ...");
    this.UserSvc.get(id)
      .subscribe(user => this.user = user);
  }

}
