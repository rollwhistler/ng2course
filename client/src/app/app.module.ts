import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ForbiddenValidatorDirective } from './utils/forms/validators/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
