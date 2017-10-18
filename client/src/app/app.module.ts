import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    DoctorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
