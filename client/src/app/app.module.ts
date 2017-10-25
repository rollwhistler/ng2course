import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { counterReducer } from './modules/shared/models/counter';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { LoggedinGuard } from './modules/shared/guards/loggedin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: 'app/modules/user/user.module#UserModule', canActivate: [LoggedinGuard] },
  { path: 'books', loadChildren: 'app/modules/book/book.module#BookModule', canActivate: [LoggedinGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    //StoreModule.forRoot({ 'counter': counterReducer }),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
