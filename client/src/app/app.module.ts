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
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: 'app/modules/user/user.module#UserModule'},
  {path: 'books', loadChildren: 'app/modules/book/book.module#BookModule'}
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    BookModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
