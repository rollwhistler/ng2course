import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch:"full"},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-edit/:id', component: UserEditComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [UserListComponent, UserEditComponent],
  exports: [UserListComponent]
})
export class UserModule { }
