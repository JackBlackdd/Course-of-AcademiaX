# Notas Masterclass HTML

## Diseño Receptivo

### Media Query

Las media queries (en español "consultas de medios") son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos (como la resolución de la pantalla o el ancho del viewport del navegador).

Se utilizan para:

Aplicar estilos condicionales con las reglas-at `@media` e `@import` de CSS.
Indicar medios específicos en los elementos `<link>`, `<source>` y otros elementos HTML.
Testear y monitorizar los estados de los medios usando los métodos de javascript `Window.matchMedia()` y `MediaQueryList.addListener()`.

#### Sintaxis

Las media queries consisten de un tipo de medio opcional y una o más expresiones de características de medios. Varias consultas se pueden combinar utilizando operadores lógicos. No distinguen entre mayúsculas y minúsculas.

El resultado de la consulta es "verdadero" cuando el tipo de medio (si se especifica) coincide con el dispositivo en el que se está mostrando el documento y todas las expresiones en el media query son "verdaderas". En este caso, se aplica los estilos correspondientes, siguiendo las reglas usuales de cascada.

Las consultas sobre tipos de medios desconocidos son siempre falsas.

```
<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
<!-- CSS media query within a style sheet -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
```
#### Media Types
Los Media Types (tipos de medios) describen la categoría general de un dispositivo. Excepto cuando se utilizan los operadores lógicos not o only, el tipo de medio es opcional y será interpretada como all.

- ``all`` Apto para todos los dispositivos.
- ``print`` Destinado a material impreso y visualización de documentos en una pantalla en el modo de vista previa de impresión. 
- ``screen`` Destinado principalmente a las pantallas.
- ``speech`` Destinado a sintetizadores de voz.

#### Operadores Lógicos
Se pueden redactar queries utilizando operadores lógicos, incluyendo ``not``, ``and``, y ``only``.

Además se puede combinar múltiples queries en una lista separada por comas múltiples; si cualquiera de las queries en la lista es verdadera, la hoja de estilo asociada es aplicada. Esto es equivalente a una operación lógica "or".

Las consultas de medios se aplican no solo a pantallas. También se utilizan para estilos de impresiones y hasta sintetizadores de texto. Para muchos más detalles a profundidad de consulta de medios puedes visitar este recurso de Mozilla:

https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries

### Movil Primero

Mobile First es una filosofía, una manera de encarar el trabajo y una forma de facilitarnos la labor durante el diseño responsive, comenzando siempre por los dispositivos, con pantallas menores.

"Mobile First" es en realidad un concepto bastante simple: diseñar pensando en los móviles primero. Así se resume este artículo que viene a explicar los motivos por los que debemos comenzar siempre centrándonos en los dispositivos con pantallas más pequeñas y generalmente con menor ancho de banda disponible para la navegación.

Cuando diseñas un sitio web responsivo debes tener en la cabeza una enorme cantidad de contextos donde tu contenido va a ser consumido. Para no perderse y para al final conseguir una solución optimizada para todo el mundo debemos aplicar la filosofía Mobile First.

A lo largo de todo el Manual de Responsive Web Design vamos dando pinceladas que nos orientan hacia la idea del mobile first. Desde la elección del contenido, quedándose con la información más esencial y rechazando lo superfluo, hasta las etapas de la ejecución de un diseño, se hacen con esta filosofía en la cabeza.
