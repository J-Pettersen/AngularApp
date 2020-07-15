import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent,
    children: [
      { path: 'posts', component: UserPostsComponent }
    ]
  },  
  { path: '**',   component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//list of routing components.
export const routingComponents = [UserListComponent,
                                  UserDetailsComponent,
                                  PageNotFoundComponent,
                                  UserPostsComponent]
