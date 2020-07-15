import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selectedUser: User;
  users: User[] = [];

  constructor(private _userService: UserService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.getUsers();
  }

  //get list of users from API and assign them to user[] array.
  getUsers(): void{
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

  onSelect(user){
    //using the id of the user selected, navigate to that user's details page.
    this.selectedUser = user;
    this.router.navigate([user.id], {relativeTo: this.route});
  }

}