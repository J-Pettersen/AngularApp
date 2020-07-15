import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() showPosts: boolean;
  @Input() userId: number;
  posts: Post[] = [];

  constructor(private _postService: PostService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {   
    this.getPosts(this.userId);
  }

  //Using a given users id, return all the posts they have made.
  getPosts(id: number): void{
    this._postService.getPosts(id)
      .subscribe(data => this.posts = data);
  }

}
