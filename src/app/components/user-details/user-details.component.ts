import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userID;
  public user; 
  constructor(private _userService: UserService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get user's id from navigation route and assing it to vatraible userID
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userID = id;
    });
    //get users data from API using user id.
    this._userService.getUser(this.userID)
                     .subscribe(data => this.user = data);
  }

  //go back to previous page or user list. include current userID as optional route parameter.
  goToUsers() {
    let selectedId = this.userID ? this.userID : null; 
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
