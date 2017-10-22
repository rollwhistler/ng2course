import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ItemsListComponent, MenuComponent],
  exports: [ItemsListComponent, MenuComponent]
})
export class SharedModule { }
