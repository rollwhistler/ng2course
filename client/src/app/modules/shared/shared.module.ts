import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterService } from './services/counter.service';
import { LoggedService } from './services/logged.service';
import { LoggedinGuard } from './guards/loggedin.guard';
import { counterReducer } from './models/counter';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';

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

  ],
  declarations: [CounterComponent],
  providers: [CounterService],
  exports: [CounterComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [LoggedService, LoggedinGuard]
    }
  }
}
