import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGetFocus]',
  standalone: true
})
export class GetFocusDirective { // Esto es una directiva creada para poner el focus automaticamente a un input. Está importada en app.component.ts y utilizada en app.component.html en un imput
  private el: ElementRef;

  constructor(el: ElementRef) { 
    this.el = el;
    this.el.nativeElement.focus();
  }

}
