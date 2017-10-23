import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LogginService } from './services/loggin.service';
import { AuthGuard } from './modules/shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'users', loadChildren: 'app/modules/user/user.module#UserModule', canActivate: [AuthGuard] },
      { path: 'books', loadChildren: 'app/modules/books/books.module#BooksModule', canActivate: [AuthGuard] }
    ]),
    SharedModule
  ],
  providers: [LogginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
