import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginGuard, LoginService, loginRoutes, LoginModule } from './login';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ErrorsModule } from './errors/errors.module';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "list", component: ListComponent, canActivate: [LoginGuard]},
  {path: "login", children:[...loginRoutes]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    LoginModule.forRoot(),
    ErrorsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
