import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from './services/error.service';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorComponent],
  exports: [ErrorComponent]
})
export class ErrorsModule {
  static forRoot(){
    return {
      ngModule: ErrorsModule,
      providers: [ErrorService]
    }
  }
 }
