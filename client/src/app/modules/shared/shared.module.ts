import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleService } from './services/simple.service';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [ItemsListComponent, SimpleFormComponent],
  providers: [SimpleService],
  exports:[ItemsListComponent, SimpleFormComponent, RouterModule]
})
export class SharedModule { }
