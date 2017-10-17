import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { ChildviewExampleComponent } from './childview-example/childview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    StylesExampleComponent,
    ChildviewExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
