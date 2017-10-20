import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  @Input() set appDelay(time: number) {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, time * 1000);
  }
  constructor(public template: TemplateRef<any>, public view: ViewContainerRef) { }

}
