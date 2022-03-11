# Notas Masterclass HTML

## Layouts

### Layouts

### Prefijos

### Posiciones

### Floats

### Flexbox

Existe todo un modulo de CSS para flexbox pero es muy técnico y es en inglés pero es la fuente de la verdad.

w3.org/TR/css-flexbox-1/

Este es un recurso más simple y divertido en donde puedes aprender y practicar el resto de propiedades de flexbox. Tu tendrás las herramientas para crear un juego como este una vez que aprendas HTML, CSS, JavaScript y el DOM:

https://flexboxfroggy.com/#es

#### justify-content

``justify-content``, la cual alinea elementos horizontalmente y acepta los siguientes valores:

- ``flex-start``: Alinea elementos al lado izquierdo del contenedor.
- ``flex-end``: Alinea elementos al lado derecho del contenedor.
- ``center``: Alinea elementos en el centro del contenedor.
- ``space-between``: Muestra elementos con la misma distancia entre ellos.
- ``space-around``: Muestra elementos con la misma separación alrededor de ellos.

#### flex-direction

``flex-direction``. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:

- ``row``: Elementos son colocados en la misma dirección del texto.
- ``row-reverse``: Elementos son colocados en la dirección opuesta al texto.
- ``column``: Elementos se colocan de arriba hacia abajo.
- ``column-reverse``: Elementos se colocan de abajo hacia arriba.

#### align-items

``align-items``. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:

- ``flex-start``: Alinea elementos a la parte superior del contenedor.
- ``flex-end``: Alinea elementos a la parte inferior del contenedor
- ``center``: Alinea elementos en el centro (verticalmente hablando) del contenedor.
- ``baseline``: Muestra elementos en la línea base del contenedor
- ``stretch``: Elementos se estiran para ajustarse al contenedor.

#### align-self

Otra propiedad que puedes aplicar a elementos individuales es ``align-self``. Esta propiedad acepta los mismos valores de ``align-items`` y sus valores son usados para un elemento específico

#### flex-wrap

``flex-wrap`` para distribuir correctamente.

- ``nowrap``: Cada elemento se ajusta en una sola línea.
- ``wrap``: los elementos se envuelven alrededor de líneas adicionales.
- ``wrap-reverse``: Los elementos se envuelven alrededor de líneas adicionales en reversa.

#### order

A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad ``order`` a elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.

#### flex-flow

Las dos propiedades ``flex-direction`` y ``flex-wrap`` son usadas a menudo en conjunto con la propiedad abreviada ``flex-flow``, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio.

Por ejemplo, puedes usar ```flex-flow``` para establecer filas y envolverlas.

#### align-content

Puedes usar ``align-content`` para establecer como múltiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:

- ``flex-start``: Las líneas se posicionan en la parte superior del contenedor.
- ``flex-end``: Las líneas se posicionan en la parte inferior del contenedor.
- ``center``: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
- ``space-between``: Las líneas se muestran con la misma distancia entre ellas.
space-around: Las líneas se muestran con la misma separación alrededor de ellas.
- ``stretch``: Las líneas se estiran para ajustarse al contenedor.

Esto puede ser confuso, pero ``align-content`` determina el espacio entre las líneas, mientras que ``align-items`` determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, ``align-content`` no tiene efecto.

### Grid

Este es un recurso más simple y divertido en donde puedes aprender y practicar el resto de propiedades de grid. Tu tendrás las herramientas para crear un juego como este una vez que aprendas HTML, CSS, JavaScript y el DOM:

http://cssgridgarden.com/#es