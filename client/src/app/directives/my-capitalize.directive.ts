import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyCapitalize]'
})
export class MyCapitalizeDirective {
  timeout: any;

  constructor() { }

  @HostBinding('class.active') isActive: boolean = false;

  @HostListener('keyup', ['$event'])
  keyup(e) {
    e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
    this.isActive = true;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.isActive = false, 3000);
  }

}
