import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/smart/user-management/user-management.component';
import { UserAddComponent } from './components/dumb/user-add/user-add.component';
import { ItemsListComponent } from './components/dumb/items-list/items-list.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    UserAddComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
