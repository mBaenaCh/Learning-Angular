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

```
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
        <!-- Componente hijos de mis componentes>
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

```
idParagraph: string;
```

Y su binding en la propiedad de un elemento html:

```
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

Primero, debemos importarlo en el modulo del componente. Este viene includo en la libreria `@angular/core`.

```
Import {Input} from '@angular/core';
```

Luego, debemos añadir el decorador en la variable que deseamos:

```
@Input() variable: type;
```
Como parametro, Input puede recibir el nombre que le daremos a la varaible cuando esta sea usada en el componente padre.

Ahora, desde el componente padre, podremos asignarle valor a esta variable:

```
<app-padre>
  <app-hijo variable="something"></app-hijo>
</app-padre>
```

Desde el padre podremos modificar tantas propiedas como tenga el componente hijo.

Tambien, podremos usar el **property binding** en caso de que definamos una propiedad en el componente padre y queramos asignarles ese valor a las propiedades de los hijos:

```
<app-hijo [prop_hijo]="valor_propiedad_padre"></app-hijo>
```