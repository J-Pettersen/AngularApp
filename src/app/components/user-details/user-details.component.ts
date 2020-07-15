import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userId: number;
  public user: User;
  public showPosts: boolean = false; 
  constructor(private _userService: UserService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get user's id from navigation route and assing it to vatraible userID
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId = id;
    });
    this.getUser(this.userId);
  }
  //get users data from API using user id.
  getUser(id: number){    
    this._userService.getUser(id)
                     .subscribe(data => this.user = data);
  }

  //go back to previous page or user list. include current userID as optional route parameter.
  goToUsers() {
    let selectedId = this.userId ? this.userId : null; 
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  togglePosts(){
    this.showPosts = !this.showPosts;
  }
}