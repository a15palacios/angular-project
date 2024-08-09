import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true
})
export class BackgroundDirective implements OnInit { // Ejemplo directiva con input
  private el: ElementRef;
  public background: string = 'transparent';

  @Input() color: string = "transparent";

  constructor(el: ElementRef) { 
    this.el = el;
  }

  ngOnInit(): void {
    this.background            = this.color;
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
