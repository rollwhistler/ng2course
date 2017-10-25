import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: UserListComponent, pathMatch: 'full' },
      { path: 'user-edit/:id', component: UserEditComponent}
    ])
  ],
  declarations: [UserListComponent, UserEditComponent],
  exports: [UserListComponent]
})
export class UserModule { }
