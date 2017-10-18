import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { CacheService } from './services/cache.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CacheService, {
        provide: HTTP_INTERCEPTORS,
        useClass: CacheInterceptor,
        multi: true,
      }]
    };
  }
}
