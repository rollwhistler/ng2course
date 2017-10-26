import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginService } from './services/login.service';
import { LoginGuard } from './guard/login.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

export const loginRoutes: Routes = [{path: "", component: LoginFormComponent}] 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginModule { 
  static forRoot() {
    return {
      ngModule: LoginModule,
      providers: [LoginService, LoginGuard]
    }
  }
}
