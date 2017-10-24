import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserListComponent, UserEditComponent],
  exports: [UserListComponent]
})
export class UserModule { }
