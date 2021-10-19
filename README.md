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