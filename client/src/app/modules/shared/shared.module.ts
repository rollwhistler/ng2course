import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleService } from './services/simple.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ItemsListComponent, SimpleFormComponent],
  providers: [SimpleService],
  exports:[ItemsListComponent, SimpleFormComponent]
})
export class SharedModule { }
