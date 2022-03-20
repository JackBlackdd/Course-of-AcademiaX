# Notas Masterclass DOM

## CRUD

### Crear

Podemos crear elementos con metodo llamado `createElement('')` de la siguiente manera

```
Let titulo = document.createElement('h1');
let span = document.createElement('span');
```

Para agregar contenido al elemento creado usamos `elementocreado.textContent = 'texto'`.

```
span.textContent = 'Esto funciono?'
```

Por ultimo para agregar el contenido creado al DOM, usamos `append.child('elemento')`

```
titulo.appendChild(span);
```

Esto ultimo, creara el elemento en el final de la cadena de DOM, en el ejemplo anterior entonces se expresaria de la siguiente manera

> body > h1 > span

Para poder controlar el lugar donde se cree se utiliza el metodo `insertAdjacentElement()`

```
titulo.insertAdjacentElement(*posicion*, span)
```

podemos reemplazar posicion con los siguientes parametros

- beforebegin
- afterbegin
- beforeend
- afterend

### Navegar por el DOM

Para navegar al ultimo elemento con el que trabaje usamos `$`

```
$.metodo
```

Para nevegar a través de los elementos del DOM usamos `queryElement('elemento')` o `querySelectorAll('elemento')`

```
document.querySelectorAll('img')[1];
```

Para poder seleccionar el 'padre' del elemento con el que estemos trabajando con `parentElement`

```
document.querySelectorAll('img')[1].parentElement;
```

En caso contrario, puedes ir desde el padre buscando entre los hijos de un elemento con `children[i]`, `firstElementChild`, `lastElementChild`.

```
contenedor.children[i];
contenedor.firstElementChild;
contenedor.lastElementChild;
```

### Editar

Para modificar texto en el DOM usaremos el metodo de `querySelector('elemento').textContent = 'Nuevo Texto'`

```
document.querySelector('h1').textContent = 'Nuevo Titulo';
```

Si queremos modificar un elemento pero agregar etiquetas HTML al mismo tiempo usamos el mismo metodo con `innerHTML`

```
document.querySelector('h1').innerHTML = '<b>Nuevo Titulo</b>';
```

### Remover

Para remover objetos del DOM usamos el metodo `remove('elemento')` o `removeChild('elemento')`, el metodo de uso principal de `remove()`, es la navegacion anterior mente vista para poder llegar al elemento en cuestion y removerlo exitosamente

```
$0.remove($0)
$0.removeChild($0.children[0]);
```
