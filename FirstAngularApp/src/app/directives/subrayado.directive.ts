import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';


/*Uso del decorador @Directive, con el uso de la propiedad "selector"
  la cual indica el nombre con el que debe llamarse la directiva en otro componente

  Recordemos que el uso de corchetes indica que la directiva debe usarse como una propiedad
  de HTML
*/
@Directive({
  selector: '[subrayado]'
})

export class SubrayadoDirective {

  /* Podemos asociar y modificar propiedades (como 'class' o 'id') del elemento HTML, 
     sobre el cual aplicamos la directiva esto lo logramos con el uso del decorador 
     HostBinding
  */
  @HostBinding('class') isHover: string;

  /* Podremos asignar Inputs a nuestra directiva para recibir valores, variables u objetos
     definidos en el elemento que llama a nuestra directiva
  */
  @Input('subrayado') config: any; //Este input debe ser inicializado en el constructor

  /* En el constructor podemos incluir la funcionalidad que realizara nuestra directiva
  */
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
    this.config = {
      colorHover: 'green',
      colorNoHover: 'red'
    }
  }
  
  /* Podemos asociar eventos a nuestra directiva por medio del decorador HostListener
  */
  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
    
  }

  @HostListener('mouseout') offHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover';
  }
}
