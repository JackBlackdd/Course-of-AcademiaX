# Notas Masterclass React

## React

### Componentes

Los compomentes son piezas de la app web o el del website, los cuales podemos crear con react, el componente podemos usarlo en toda la pagina.

### Propiedades

Podemos agregar propíedades de HTML así como si pasaramos un argumento de JS para que nuestas etiquetas de HTML sean mas funcionales

```
function Bienvenido(props) {
        return <h1>Bienvenido! {props.nombre}</h1>;
```
Usamos `props` como argumento de nuestra etiqueta a crear, seguidamente de su contenido y la propiedad `{props.PROPIEDAD}`

Puedes crear todos los componentes que tu quieras y juntarlos como una libreria para luego usarlos en todas tus proyectos con la misma libreria.

### Clases

Un componente de clase es aquél que está definido con una clase de JavaScript. Esta clase debe tener dos particularidades: Primero, debe ser una clase de ES6 de JavaScript que herede de React. Component.
Este nos permite guardar su estado y controlar lo que ocurre durante su ciclo de vida.

### Eventos

¿Qué son eventos en React?
Los eventos en React se definen generalmente de manera declarativa, en el código de la vista o template, producido con JSX en el método render(). Para definirlo tenemos que indicar dos cosas: Primero el tipo de evento que queremos implementar y luego el método que hará las veces de manejador de evento.

### Estados 

Un estado en React es, entonces, un almacén de datos mutable de componentes y que además son autónomos. O sea, el estado pertenece una clase autónoma que cualquiera pueda importar y usar en su aplicación.

### Condicionales

### Listas

### Ciclos de vida

Visualización de Ciclos de Vida en React:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Formularios

Más información sobre componentes controlados, componentes no controlados, y otras opciones para formularios como Formik:

https://es.reactjs.org/docs/forms.html#controlled-components

### Paso de estado