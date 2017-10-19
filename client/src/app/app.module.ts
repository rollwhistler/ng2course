import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/smart/user-management/user-management.component';
import { UserAddComponent } from './components/dumb/user-add/user-add.component';
import { ItemsListComponent } from './components/dumb/items-list/items-list.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserService } from './services/user.service';
import { LogInterceptor } from './interceptors/log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    UserAddComponent,
    ItemsListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
