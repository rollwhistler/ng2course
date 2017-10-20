import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './components/smart/user-management/user-management.component';
import { UserAddComponent } from './components/dumb/user-add/user-add.component';
import { ItemsListComponent } from './components/dumb/items-list/items-list.component';
import { MyCapitalizeDirective } from './directives/my-capitalize.directive';
import { DelayDirective } from './directives/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    UserAddComponent,
    ItemsListComponent,
    MyCapitalizeDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
