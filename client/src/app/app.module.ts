import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
 
import { UserListComponent } from './modules/user/components/user-list/user-list.component';
import { BookListComponent } from './modules/book/components/book-list/book-list.component';
import { UserEditComponent } from './modules/user/components/user-edit/user-edit.component';
import { BookEditComponent } from './modules/book/components/book-edit/book-edit.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'book-edit/:id', component: BookEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
