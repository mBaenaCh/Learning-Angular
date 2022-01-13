import { Directive, ElementRef } from '@angular/core';


/*Uso del decorador @Directive, con el uso de la propiedad "selector"
  la cual indica el nombre con el que debe llamarse la directiva en otro componente

  Recordemos que el uso de corchetes indica que la directiva debe usarse como una propiedad
  de HTML
*/
@Directive({
  selector: '[subrayado]'
})

export class SubrayadoDirective {

  /* En el constructor podemos incluir la funcionalidad que realizara nuestra directiva

     
  */
  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
   }

}
