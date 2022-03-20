## Notas Masterclass DOM

## Modificaciones

### CSS

Hacer modificaciones en css mediante la consola del navegador es bastante sencillo usamos `style.propiedad = 'modificacion'`

```
$0.style.color = '#FFFFFF';
$0.style.fontSize = 20px;
```

Una forma mas sencilla mas simple de escribir lo anterior es con `style.cssText = 'modificaciones'`

```
$0.style.cssText = Color: blue; font-size 100px;
```

Si nos percatamos de las diferencias en la primera forma al escribir en HTML usamos el estilo CamelCase en el cual se asimila a las jorobas de un camello, sin espacios y cada nueva palabra apartir de la segunda va en mayusculas _soyUnEjemploCamelCase_ en cambio en css utilizamos un "-" entre atributos _soy-un-ejemplo-css_

### Atributos

Para establecer atributos usamos `setAttribute('style', 'atributo1: 1;'atributo2: 2;')`;

```
$0.setAttribute('style', 'color: #000000; 'font-family: 'Helvetica';);
```

Esto hace exactamente lo mismo que lo anterior pero con una diferente sintaxis

### Clases

Entiendo todo lo visto funciona! PERO, NO es practico modificar elemento por elemento los estilos que deben tener, por ende se usan clases para asi modificar un grupo de elementos del mismo tipo, de esta manera permites que sea mas facil trabajar en el proyecto.

Para ello usamos el metodo `classList` con un metodo del propio

- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`

```
document.querySelector('h1').classList.add('rojo');
document.querySelector('h1').classList.remove('rojo');
document.querySelector('h1').classList.toggle('rojo'); //toggle es un switch que apaga y prende la clase
document.querySelector('h1').classList.contains('rojo'); // Verifica si existe la clase en el elemento
```
