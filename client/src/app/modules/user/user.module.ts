import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: UsersListComponent, pathMatch: 'full' },
      { path: 'user-edit/:id', component: UserEditComponent }
    ])
  ],
  declarations: [UsersListComponent, UserEditComponent]

})
export class UserModule { }
