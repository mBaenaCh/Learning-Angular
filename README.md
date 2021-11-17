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
        <!-- Componente hijos de mis componentes>-->
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
