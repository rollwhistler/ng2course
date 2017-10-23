import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleService } from './services/simple.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [ItemsListComponent, MenuComponent, SimpleFormComponent],
  providers: [SimpleService],
  exports: [ItemsListComponent, MenuComponent, SimpleFormComponent]
})
export class SharedModule { }
