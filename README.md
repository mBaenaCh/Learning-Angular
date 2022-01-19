# Angular Forms

Son una herramienta fundamental para recuperar informacion del usuario.

Es ideal que los formularios controlen los cambios en los diferentes campos, como el haber clickeado en un campo pero no ingresar nada, el no seleccionar ninguno o el llenar un campo seleccionado, etc.

Asi mismo, estos deben validar los datos introducidos en los campos para recibir la informacion que se espera, de lo contrario se espera brindar instrucciones o advertencias que indiquen al usuario que se esta haciendo mal o que hace falta en la informacion que se esta ingresando.

## Tipos de formularios

### Template

Formularios de tipo HTML que limitan el uso de validaciones.

Su modulo de importacion es: `FormsModule`  y se usa ese tipo de formulario deberia importarse al archivo `app.module.ts`. Recordar que se añade a la propiedad `imports`.

Los formularios de tipo template guardan los valores ingresados en los inputs en una instancia de tipo `ngForm` y este proceso se realiza cuando se da un evento `ngSubmit`, al cual asociaremos un metodo dentro de nuestro archivo .ts . Para asociar los inputs al ngForm solo debemos incluir la directiva `ngModel` a cada input, en este caso tambien se recomienda incluir la propiedad `name` a cada input para identificar cada uno dentro del `ngForm`.

Lo que nos deja con una estructura como esta:

```html
<form #variablePlantilla="ngForm" (ngSubmit)="onSubmit(variablePlantilla.value)">
    <div>
        <label></label>
        <input type="text" name="input1" ngModel>
    </div>
    <input type="submit">
</form>
```

Como tal, la variable de plantilla no la llevamos al archivo .ts, lo que llevamos son unos `formValues` que luego podremos usar a nuestro gusto en la logica de nuestro componente.

```typescript
onSubmit(formValues){}
```

### Model

Son formularios que permiten generar una instancia (objeto) que puede asociarse a los campos del formulario y sobre el cual se pueden validaciones.

Su modulo de importacion tambien debemos añadirlo en nuestra propiedad `imports` de nuestro archivo `app.module.ts`, el modulo se llama: `ReactiveFormsModule`.

Luego, en nuestro componente de formulario solo debemos añadir una propiedad de tipo `FormGroup` y esta cuando sea inicializada en el `constructor()` tendra cada uno los de los campos del formulario que esperamos recibir, estos seran de tipo `FormControl`:

```typescript
formulario: FormGroup;

constructor(){
    this.formulario = new FormGroup({
        input1 = new FormControl(),
        input2 = new FormControl(),
    });
}
```

A nivel de HTML nuestro componente se vera de esta manera, donde nuestro `form` cargar el `FormGroup` que definimos como propiedad. Asi mismo, se asociara un evento `ngSubmit` al formulario:

```html
<form [formGroup]="formulario" (ngSubmit)="onSubmit()">
    <input formControlName="input1">
    <input formControlName="input2">
</form>
```

## Ñapa (Instalar bootstrap)

Instalar dependencia:

```cli
npm i bootstrap
```

Y para cargar los estilos de bootstrap:

Añadir en el angular.json, en la propiedad `styles`, la ubicacion de los estilos de bootstrap, que se encuentran en `node_modules`:

```json
{
    "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ]
}
```
