# Angular Project

- Contiene un modulo principal (`app.module.ts`) que carga todos los componentes, pipes, modulos externos, etc. que usara nuestra aplicacion.

- Contiene la plantilla principal (`app.component.html`) donde se dispondran los selectores de los componentes que creemos en nuestra aplicacion.

## Creacion de componentes

Con el comando `ng generate component nombreComponente`. Asi mismo, este es incluido en el modulo principal de la aplicacion.

Un componente tiene:

- Un archivo .ts que hace referencia a la clase con el decorador del componente y el nombre del selector con el cual puedo llamar al mismo en otro formulario o componente. Tambien, se incluyen los metodos o propiedades que puede tendra el componente.

- Un archivo .html que contiene el diseño del componente. Este puede contener selectores otros componentes.

- Un archivo .css que define el estilo del componente.

- Puede tener mas de un estilo (Por eso *styleUrls* es un array).

## Jerarquia de componentes

Un componente puede llamar a otros componentes dentro de si

Dentro de un proyecto de angular encontraremos algo similar a esto, en cuanto a jerarquia de componentes:

```html
<html>
<head>
  <!-- Contenido del Head -->
</head>
<body>
  <!-- app-component.html -->
  <app-root>
    <!-- Componentes padre de mi app -->
    <app-padre>
        <!-- Etiquetas html -->
        <!-- Componente hijos>-->
        <app-hijo>
            <!-- Etiquetas html -->
        </app-hijo>
    </app-padre>
  </app-root>
</body>
</html>
```

## Propiedades en nuestros componentes

Dado que nuestros componentes, en su parte logica, tienen asociada una clase de Typescript, entonces podemos asociar propiedades a estas.

El constructor de nuestra clase lo podemos usar para inicializar estas propiedades/variables.

Finalmente, podemos usar estas variables en nuestro .html del componente con el uso de handlebars: `{{variable}}`

### Handlebars

Estan dados por `{{ }}`  y estos pueden contender informacion dinamica de Typescript como variables. Estos bloquean el uso de algunas funciones nativas de Typescript, sin embargo, podemos usar metodos que hallamos definido en el archivo .ts de nuestro componente.

## Property binding

Nos permite asociar valores de variables en las propiedades de nuestro html, como por ejemplo

La enunciacion de una variable

```typescript
idParagraph: string;
```

Y su binding en la propiedad de un elemento html:

```html
<p id="{{idParagraph}}">Some text</p>
```

Notese que usamos handlebars. Tambien, podremos añadir prefijos o sufijos al valor de la variable en la propiedad.

Otra forma de realizar este property binding es con el uso de la siguiente expresion: `<p [id]="idParagraph">Some text</p>`, donde indicamos que la propiedad `[id]` tendra como valor una variable dinamica de Typescript (Que en el navegador sera Javascript).

## Event binding

Ademas de poder asociar variables dinamicas a nuestras vistas, tambien podemos asociar eventos dinamicos que realicen distintas cosas cuando los usamos.

Los eventos los podemos llamar con `( nombre evento )`, por ejemplo: `(click) = "onClick()"`. Donde `onClick()` hace referencia a un metodo que hemos definido en la clase Typescript de nuestro componente.

Los metodos definidos para nuestros eventos tambien pueden recibir parametros. Por ejemplo, podemos usar `$event` para retornar informacion de un evento. Entonces `(click) = onClick($event)` nos retornaria informacion del evento Click.

Existen otros eventos como:

- **input:** Nos permite obtener propiedades de un input por medio de un evento sobre este.

- **blur y focus:** Identifica el evento de cuando hay enfasis o no sobre un input. Por ejemplo, cuando le damos click a un input para ingresar texto.

## Decorators

- **@input:** Permite manipular las variables de una variable de un componente hijo desde su padre.

Los Inputs no necesitan ser inicializados desde el componente donde se definen.

Primero, debemos importarlo en el modulo del componente. Este viene includo en la libreria `@angular/core`.

```typescript
Import {Input} from '@angular/core';
```

Luego, debemos añadir el decorador en la variable que deseamos:

```typescript
@Input() variable: type;
```

Como parametro, Input puede recibir el nombre que le daremos a la varaible cuando esta sea usada en el componente padre.

Ahora, desde el componente padre, podremos asignarle valor a esta variable:

```html
<app-padre>
  <app-hijo variable="something"></app-hijo>
</app-padre>
```

Desde el padre podremos modificar tantas propiedas como tenga el componente hijo.

Tambien, podremos usar el **property binding** en caso de que definamos una propiedad en el componente padre y queramos asignarles ese valor a las propiedades de los hijos:

```html
<app-hijo [prop_hijo]="valor_propiedad_padre"></app-hijo>
```

- **output:** Son un decorador que permite emitir eventos. Estos eventos, son asociados a una variable, cuyo valor puede ser llevado de un componente a otro.

Al igual que el decorador `input`, debemos importarlo por medio de `@angular/core`.

```typescript
import {Output, EventEmitter} from '@angular/core';
```

Luego, añadimos el decorador y asociamos esta a un objeto de tipo `EventEmitter` con el tipo de variable que queremos:

```typescript
@Output() variable: EventEmitter<tipo variable>;
```

Dado que nuestra variable es un objeto, lo podemos inicializar de la siguiente manera:

```typescript
constructor(){
  this.variable = new EventEmitter();
}
```

Posteriormente, podremos asociar esta variable a algun evento en el componente hijo, evento que emitiremos al componente padre:

```typescript
this.variable.emit(tipo variable);
```

En el componente padre, recibiremos este evento por medio de esta variable y asociaremos un evento a este para poder usar su valor.

```html
<app-hijo (variable) ="eventoPadre($event)">
```

El valor de la variable, la podemos obtener por medio de `$event`.

## Two way binding

Permite enlazar el valor producido en un elemento de un componente con una variable definida dentro del mismo, variable que podra ser usada por otro elemento de ese componente, lo cual define ese doble enlace.

Primero, deberemos cargar el modulo `FormsModule` a nuestra aplicacion (Osea, añadirla al `app.module.ts`).

```typescript
import {FormsModule} from '@angular/forms';
```

Y luego añadir este modulo a los imports:

```typescript
imports: [
  FormsModule
]
```

El enlace doble lo evidenciaremos si añadimos un `ngModel`, asociado a una variable del componente, a un elemento y si llamamos esta variable en otro elemento.

```html
<input [(ngModel)]="variable">
<p>{{variable}}</p>
```

Otra funcionalidad del two way binding, es el uso de formularios que permiten asignar propiedades a un objeto definido en un componente.

```html
<input [(ngModel)]="object.property1">
<input [(ngModel)]="object.property2">
<input [(ngModel)]="object.property3">
```

## Ciclo de vida de componentes

Esta marcado por la ejecucion de distintos metodos encontrados en la logica de cada componente:

### constructor()

Nos permite inicializar propiedades definidas en un componente.

Asigna a un **Input** el valor con el fue inicializado en el componente hijo.

### ngOnInit()

Permite inicializar funciones necesarias en la primera ejecucion de nuestro componente.

Asigna a un **Input** el valor que le fue asignado en el componente padre.

### ngAfterViewInit()

Permite realizar cambios en la vista de un componente, cuando este ha sido inicializado.

### ngOnChange()

Este metodo se ejecuta por debajo del metodo ngOnInit(), y lo hace cada vez que una propiedad, input u output cambia desde algun otro componente.

Un parametro que recibe este metodo es `changes: SimpleChange`, el cual contiene los cambios de propiedades, inputs u outputs, entre otras caracteristicas que hallan cambiado en nuestro componente.

### ngOnDestroy()

Este metodo se ejecuta cuando un metodo deja de ser usado.

## Directivas

Son cualquier componente, elemento o propiedades que hace parte de un elemento de HTML, sea de un componente o de un elemento de HTML.

### Atributos

Las cuales modifican propiedades de elementos HTML, como estilos o clases.

- **ngStyle** Para modificar estilos a partir de variables que definamos en un componente.

```html
<p [ngStyle]="varStyle">
```

Y la variable siendo un objeto de tipo JSON con las siguientes propiedades:

```javascript
varStyle = {
  color: 'red',
  fontSize: '24px'
}
```

Con un ngModel podriamos asociar la propiedad de este objeto a otro elemento HTML y asi cambiar su estilo de forma dinamica.

```html
<input type="text" [(ngModel)]="varStyle.color">
```

Otra forma de modificar la variable de estilo se puede lograr con el evento `(change)`:

```html
<input type="range" min="10" max="50" step="2" (change)="onChange($event)">
```

```typescript
onChange($event){
  this.varStyle.fontSize=`${$event.target.value}px`;
}
```

El evento `(change)` nos cambia el estilo pero solo cuando se ha cambiado el valor de la etiqueta `range`. Si queremos que el estilo se modifique inmediatamente, podemos usar el evento `(input)`:

```html
<input type="range" min="10" max="50" step="2" (input)="onChange($event)">
```

- **ngClass** Es una directiva que permite asociar clases dinamicas a elementos html, se recomienda usar la estructura de datos array para esta asociacion dinamica.

```html
<div [ngClass]="classArray">
```

Array que podemos definir y modificar a nuestro gusto en el componente:

```typescript
classArray: string[];

constructor(){
  this.classArray = [''];
  this.classArray.push('someClass');
}
```

Otra forma de cambiar de forma dinamica las clases de estilos de un elemento HTML es con un objeto que valide la seleccion de esa clase:

```html
<div [ngClass]="{ estilo1: true, estilo2: false, estilo3: true }">
```

La validacion de la seleccion de una clase se da por el valor booleano que esta tenga en el objeto, en este caso se aplicarian las clases `estilo1` y `estilo3`. Esto deberia ser manejado con una propiedad del componente y no desde el HTML (**Mirar el componente semaforo**).

### Estructurales

Las cuales modifican estructuras de toda la pagina web, con el uso de estructuras condicionales o bucles.

- **ngIf** Permite mostrar u ocultar elementos en funcion de una expresion logica

```html
<p *ngIf="checkVar">Some text</p>
```

```typescript
checkVar: boolean;

constructor(){
  this.checkVar = true;
}
```

Previamente, las estructuras if-else que usaba angular se lograba por medio de mostrar bloques de contenido HTML en funcion de la variable condicion:

```html
<p *ngIf="showBlock; then secondBlock else thirdBlock">Text 1</p>
<ng-template #secondBlock>
  <p>Text 2</p>
</ng-template>  
<ng-template #thirdBlock>
  <p>Text 3</p>
</ng-template>
```

Sin embargo, podemos simplificar nuestro codigo simplemente negando la variable de condicion en otros elementos HTML, por ejemplo:

```html
<p *ngIf="showBlock">Text 1</p>
<p *ngIf="!showBlock">Text 2</p>
```

- **ngFor** Permite iterar sobre estructuras de datos como arreglos de objetos, para mostrarlos en nuestro formulario HTML

```typescript
objects: any[];
```

```html
<ul>
  <li *ngFor="object in objects">
    {{object.property}}
  </li>
</ul>
```

Puedo generar bucles en varias estructuras como tablas u otros elementos HTML (**Revisar componente bucles**).

- **ngSwitch** Permite generar una estructura condicional Switch con elementos HTML:

```html
<div [ngSwitch]="switchVar">
  <p *ngSwitchCase="1">Option 1</p>
  <p *ngSwitchCase="2">Option 2</p>
  <p *ngSwitchDefault>None of the others</p>
</div>
```

En el **.ts** veremos algo similar a esto:

```typescript
switchVar: number;

constructor(){
  this.switchVar = 1;
}
```

Tambien podemos usar variables de tipo string, donde tendremos que añadir comillas simples extras `'opt'`:

```html
<div [ngSwitch]="switchVar">
  <p *ngSwitchCase="'opt1'">Option 1</p>
  <p *ngSwitchCase="'opt2'">Option 2</p>
  <p *ngSwitchDefault>None of the others</p>
</div>
```

En el **.ts** veremos algo similar a esto:

```typescript
switchVar: string;

constructor(){
  this.switchVar = 'opt1';
}
```

- **Directivas personalizadas** Que realicen funciones repetitivas que podemos reusar a lo largo de nuestro proyecto.

Puedo crear directivas por medio del comando `ng generate directive directives/Directiva`, lo ideal seria ubicarlas en una carpeta de `directives`. Las directivas tambien incluyen archivos para el Testing, podemos omitirlas con la flag `--skip-tests`.

El generar directivas crea la declaracion en `app.module`, lo cual permite usar la directiva en el resto de componentes de la aplicacion (**Para mas informacion, revisar la directiva "Subrayado"**).

Si el nombre de nuestra directiva es instanciada como:

```typescript
@Directive({
  selector: '[nombreDirectiva]'
})
```

Esta sera llamada como propiedad de HTML, lo cual es lo mas recomendable.

```HTML
<p nombreDirectiva>Lorem</p>
```

Pero, si nuestra directiva es instanciada de la siguiente manera:

```typescript
@Directive({
  selector: '.nombreDirectiva'
})
```

Esta sera llamada como una clase dentro del elemento HTML:

```HTML
<p class="nombreDirectiva">Lorem</p>
```

Lo ideal del uso de directivas es la de interactuar con el elemento sobre el cual se llaman. Esto se hace por medio de la inyeccion de dependencias de un parametro, en el constructor, de tipo ElementRef:

```typescript
import { Directive, ElementRef } from '@angular/core';

constructor(private elem: ElementRef) {
  this.elem.nativeElement.style.textDecoration = 'underline';
}
```

El uso del control de acceso "private" nos permite usar esa propiedad dentro de todo el contexto del archivo de la directiva por medio de una referencia a este con `this`.

Dado que estoy trayendo el elemento sobre el cual aplico la directiva, por medio de JavaScript nativo puedo editar las propiedades de este elemento, por ejemplo aplicando solo un estilo al texto para que quede "subrayado".

Debido a que una aplicacion de Angular puede ser vista en distintos entornos (movil, navegador, escritorio), podemos aplicar estilos generalizados para que estos se vean de la misma manera en estos distintos entornos. Esto lo logramos por medio de la propiedad `Renderer` de nuestra directiva, lo cual veriamos de la siguiente manera:

```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

constructor(private elem: ElementRef, private renderer: Renderer2) {
  this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
}
```

Para el manejo de nuestras directivas personalizadas, tenemos el decorador `@HostListener`, el cual permite administrar la captura de eventos sobre elementos a los cuales aplicamos nuestras directivas. Podemos tener en cuenta eventos como `mouseover`, `click`, etc.

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@HostListener('mouseover') onHover(){
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
}

@HostListener('mouseout') offHover(){
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
}
```

Tambien, tenemos la posibilidad de editar propiedades del elemento HTML sobre el cual añadimos directivas, propiedades como `class`, `id`, etc. Esto lo logramos por medio del decorador `@HostBinding`, el cual es usado a modo de propiedad:

```typescript
import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@HostBinding('class') isHover: string;

@HostListener('mouseover') onHover(){
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
  this.isHover = 'hover';
}

@HostListener('mouseout') offHover(){
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
  this.isHover = 'noHover';
}
```

Dichas clases mencionadas en las asignaciones se presumen que se encuentran en el archivo .css del archivo .html donde se halla el elemento html con la directiva (nuevamente, mirar app.component.html, app.component.css y subrayado.directive.ts).

Por ultimo, tambien podemos recibir valores en la directiva por medio del uso del decorador `@Input`:

```typescript
import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Input('nombreDirectiva') propiedad: tipoPropiedad;
```

Donde podremos asignar valores que asociaremos al Input de nuestra directiva:

```HTML
<p [nombreDirectiva]="variable">Lorem</p>
```

## Routing

Dado que las aplicaciones de Angular son SPA, el uso de enlaces para navegar entre paginas, por medio de Routing, es totalmente distinto al tradicional. En este no tendremos que cargar todo un HTML que contenga otra pagina con otro contenido, sino una pagina con los componentes exclusivos de esa misma.

Como tal, esta libreria nos permite activar o desactivar componentes en funcion de la ruta que tengamos en nuestro navegador.

Para añadir la libreria de Routing a nuestro proyecto, el CLI de Angular nos pedira si deseamos incluirlo cuando creemos uno nuevo, pero si ya creamos un proyecto y deseamos incluir este modulo, podemos usar el comando:

```cli
ng generate module app-routing --flat --module=app
```

Con el anterior paso, deberemos incluir el `RouterModule` en los `imports` de nuestro `app.module.ts`

### Routes

Las rutas se manejan en un array de tipo `Routes` que alberga objetos con la siguiente estructura:

```json
{
  "path": "nombre ruta",
  "component": "componente asociado a la ruta"
}
```

Podremos usar nuestras rutas al llevar el componente `<router-outlet></router-outlet>` en el archivo `app.component.html`

Para redigir de una ruta a otra, nuestro objeto de ruta se vera de la siguiente manera:

```json
{
  "path": "nombre ruta",
  "redirectTo": "nombre ruta a la cual redirigir"
}
```

El redigir de una ruta a otra nos llevara a que el nombre de la ruta final tambien cambie a la cual nos redirigimos.

Nuestro array de rutas debe tener un orden, debido a que el navegador verifica una por una cual nombre de ruta coincide con la de la solicitud realizada. Generalmente, podemos crear una ruta de nombre `**` que nos redirija a otra ruta o a un componente que indique que esa ruta no existe (Algo grafico que indique un codigo de estado 404, por ejemplo).

Tambien, podemos crear una ruta principal o home, la cual podria tener un valor vacio como nombre y que este valor vacio se **deba cumplir** (full) cuando se realice una consulta a esa ruta y que esta redirija a otra ruta o que lleve a un componente, por ejemplo:

```json
{
  "path": "",
  "pathMatch": "full",
  "redirectTo": "otra ruta"
}
```

### Router link

Permite navegar entre rutas a nivel de componentes, como una propiedad de un elemento html, con la ventaja de no reiniciar la pagina:

```html
<a [routerLink]="['/info']">Hacia la ruta info</a>
```

Recibe como parametro la posicion en un array, el cual es nuestro array de rutas y el nombre de la ruta a la cual nos queremos dirigir.

### Router Link Active

Nos permite añadir una clase al elemento html sobre el cual tenemos un Router Link, lo que simularia por ejemplo un boton con algun estilo que indique que este se encuentra activo (Como en un navbar)

```html
<a [routerLink]="['/info']" routerLinkActive="nombre clase">Hacia la ruta info</a>
```

### Router navigate

Es un metodo que nos permite navegar a otra ruta luego de que se realice algun evento en un metodo del archivo .ts de un componente.

Para esto debemos realizar una inyeccion de dependencia del modulo Router, esto lo podemos hacer llevando al constructor de nuestro componente un atributo de tipo `Router` y simplemente llamar el metodo `navigate` para redireccionar hacia alguna ruta de nuestro array de rutas:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router){}

onClick(ruta: string): void {
  this.router.navigate([ruta]);
}
```

### Rutas dinamicas

Son aquellas que tienen una ruta que varia segun el valor de alguna variable dentro de la logica de mi aplicacion y que esta pueda ser usada por otras rutas, por ejemplo:

```json
{
  "path": "detalle/:id",
  "component": "DetalleComponent"
}
```

Dentro de la logica del componente asignado a la ruta dinamica, se puede acceder al valor dinamico por medio de un objeto de tipo `ActivatedRoute` y su propiedad `params`, lo cual permite "*suscribirse*" a la informacion dinamica (De tipo `Observable`) que tenga el parametro de la ruta, con el nombre que le hallamos dado:

```typescript
variable: number;

ngOnInit(): void {
  this.activatedRoute.params.suscribe(params => {
    this.variable = params.id;
  })
}
```

### Children routes

Nos permite añadir mas direcciones a rutas principales como por ejemplo acceder a informacion de una id dentro del detalle que establecimos anteriormente `/detalle/:id/hijo`. Dentro de nuestras rutas, podemos ver las rutas hijas con la propiedad `children`:

```json
{
  "path": "detalle/id",
  "component": "DetalleComponent",
  "children": [
    {"path": "hijo1", "component": "Hijo1Component"},
    {"path": "hijo2", "component": "Hijo2Component"},
  ]
}
```

Las rutas hijas dependen de que la ruta padre exista primero.

El añadir rutas hijas tambien exije que el componente padre instancie un componente `<router-outlet>` en su archivo de HTML.

Desde los componentes de las rutas hijas tambien se puede retornar el valor dinamico de la ruta general pero primero debemos acceder a la ruta padre, esto se hace de la siguiente manera:

```typescript
this.activatedRoute.parent.params.suscribe(params => console.log(params.id));
```

### Guards

Permiten limitar el acceso a ciertas rutas, por ejemplo dar acceso a una aplicacion cuando un usuario se loggee.

Por medio del CLI de Angular podemos crear un Guard:

```cli
ng generate guard Random
```

Al generar un Guard, el CLI nos preguntara que interface deseamos implementar, entre estas tenemos:

- **CanActivate**

El cual bloquea el navegar a una ruta en concreto

- **CanActivateChild**

Que bloquea el navegar hacia rutas hijas de otra

- **CanDeactivate**

Bloquea el navegar fuera de una ruta hacia otras

- **CanLoad**

Donde se bloquea la carga de componentes

Los Guards son objetos que se puede inyectar en componentes o donde sea necesario usarlos y el concepto de estos es que a traves de la interface implementada se devuelva un valor *False* o *True* que permita determinar si se permite el ingreso o no a la ruta.

Para llamar un Guard en alguna ruta, solo debemos añadirlo a la propiedad "canActivate" del objeto de la ruta, esta propiedad contiene un array de Guards que se valida en orden:

```JSON
{
  "path": "nombre ruta",
  "component": "NombreComponente",
  "canActivate": [ "guard1", "guard2"]
}
```

Los ejemplos de Routing se pueden ver en los componentes "DetalleProducto", "detalle/Fotos" y "detalle/Quejas".
