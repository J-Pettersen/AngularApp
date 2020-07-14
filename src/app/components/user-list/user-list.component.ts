import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selectedId;
  public users = [];

  constructor(private _userService: UserService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get list of users from API and assign them to user[] array.
    this._userService.getUsers()
      .subscribe(data => this.users = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      
    });
  }

  onSelect(user){
    //using the id of the user selected, navigate to that user's details page.
    this.router.navigate([user.id], {relativeTo: this.route});
  }

}
