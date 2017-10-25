import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleService } from './services/simple.service';
import { LoggedService } from './services/logged.service';
import { LoggedinGuard } from './guards/loggedin.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ItemsListComponent, SimpleFormComponent],
  providers: [SimpleService],
  exports:[ItemsListComponent, SimpleFormComponent]
})
export class SharedModule { 
    static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [LoggedService, LoggedinGuard]
    }
  }
}
