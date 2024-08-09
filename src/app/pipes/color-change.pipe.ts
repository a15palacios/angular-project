import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'colorChange',
  standalone: true
})
export class ColorChangePipe implements PipeTransform {

  constructor(private el: ElementRef){

  }

  transform(value: string): string { 
    if(value.includes('Rick')){
      return value.toUpperCase();
    }
    if(value.includes('Morty')){
      return value.replace('r', 'R');
    }
    return value;
  }

}
