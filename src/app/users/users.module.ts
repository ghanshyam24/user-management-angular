import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent
  ]
})
export class UsersModule { }
