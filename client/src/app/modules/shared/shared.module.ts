import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { SimpleService } from './services/simple.service';
import { LoggedService } from './services/logged.service';
import { LoggedinGuard } from './guards/loggedin.guard';
import { reducers } from './reducers';
import { counterReducer } from './models/counter';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    //StoreModule.forFeature('items', reducers),
    StoreModule.forFeature('shared', { 'counter': counterReducer }),
  ],
  declarations: [ItemsListComponent, SimpleFormComponent],
  providers: [SimpleService],
  exports: [ItemsListComponent, SimpleFormComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [LoggedService, LoggedinGuard]
    }
  }
}
