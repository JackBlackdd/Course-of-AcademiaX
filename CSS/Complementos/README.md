# Notas Masterclass HTML

## Complementos

### Transicciones

Muchas propiedades de CSS pueden ser animadas. Para esto tenemos transiciones. Cuando construyamos el proyecto verás como funcionan pero este es un resumen:

Permiten cambiar de un estado a otro. Por ejemplo, para cambiar el color de un botón de rojo (red) a (azul) cuando ponemos el curso encima con este código:

```
button {
    background: red;
    transition: 2s background 3s ease;
}
button:hover {
    background: blue;
}
```

Indicamos la propiedad que vamos a animar (background), el tiempo antes de animar (2s), el tiempo de la animación (3s), y la curva de la animación (ease). Pruébalo en tu navegador!

transition es una abreviación de las propiedades:

`transition-delay`
`transition-duration`
`transition-property`
`transition-timing-function`

No todas las propiedades son animables pero aquí tienes una lista:

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties

En este recurso puedes ver como se comportan las diferentes curvas de animación:

https://easing.webflow.io/

### Transformaciones

Los elementos de HTML pueden ser transformados con CSS. Para esto tenemos transformaciones. Cuando construyamos el proyecto verás como funcionan pero este es un resumen:

Puedes usar la propiedad transform cono los valores de:

```
p { transform: translateX(10px); }
    mueve el elemento 10px a la derecha en el eje X
p { transform: translateY(-10px); }
    mueve el elemento 10px hacia abajo en el eje Y
p { transform: scale(2); }
    hace que el elemento sea 2 veces su tamaño
```

Este recurso te nuestra todas las transformaciones que puedes realizar:

https://developer.mozilla.org/en-US/docs/Web/CSS/transform

### Animaciones

Las animaciones son como las transiciones pero permiten comportamientos más complejo y se merecen sus propio curso. Primero se crea la animación con la palabra @keyframes y se le da un nombre.

Este es un ejemplo:

```
@keyframes nombre {
    0% { color: black; }
    50% { color: white; }
    100% { color: red; }
}
```

Después se aplica este nombre al selector de esta manera:

```
div {
    animation-name:nombre;
    animation-duration: 4s;
}
```

Esto anima el texto de la etiqueta div de blanco a negro a rojo en 4 segundos. Pruébalo en tu navegador!

Aquí tienes un recurso útil en inglés:

https://developer.mozilla.org/en-US/docs/Web/CSS/animation
