# Learning angular: Typescript

Typescript es un conjunto de herramientas superiores a Javascript.

Añade funcionalidades de tipados, decoradores y demas herramientas que necesita un proyecto de angular para funcionar.

El codigo que es escrito en Typescript debe ser transformado a ES6 en tiempo de compilacion para que pueda ser usado en el navegador.

## Instalacion de typescript

Usando el comando: `npm install -g typescript`

## Compilacion de archivos .ts

Nos permitira compilar un archivo de Typescript, nos mostrara errores dentro de la sintaxis y ademas generara un archivo JavaScript que podremos ejecutar.

Usamos el comando: `tsc archivo.ts`

## Archivo tsconfig.json

Es un archivo que nos permite configurar la compilacion de nuestro codigo de Typescript, algunas opciones son:

- compilerOptions
    - target: Que nos indica bajo que estandar queremos compilar (Por ejemplo ES6).
    - outDir: Para indicar el directorio donde quedaran guardados los archivos .js generados.
    - noEmitOnError: Para evitar generar archivos .js cuando hay errores en la compilacion.

## Tipado en Typescript

Typescript indica explicitamente la tipologia de las variables, a diferencia de JavaScript, donde esta tipologia es inferida.

## Interfaces

Permiten definir estructuras de datos que representen una entidad con propiedades. La instancia de una interfaz debe tener todas las propiedades que fueron definidas en un principio. Sin embargo, podemos omitir esto añadiendo un "**?**" al nombre de la propiedad que queramos omitir.

Adicionalmente, existen valores de propiedades que nunca cambiaran de valor, como las *readonly*.

Finalmente, definimos que una clase puede **implementar** a una interface. Esta clase debe implementar las mismas propiedades y tambien puede implementar unas propias.

## Funciones

Deben recibir parametros tipados y asi mismo deben establecer el valor de retorno (void u otro tipo) de la misma. 

Como parametros puden recibir de forma opcional algunos de estos, nuevamente usando "**?**" o recibir valores por defecto, simplemente igualando el parametro (y su tipo) al valor deseado.

Tambien, existen los parametros rest (...) que reciben una lista de valores.