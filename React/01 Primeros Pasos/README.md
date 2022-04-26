# Notas Masterclass React

## React

Utilizar componentes para reutilizar codigo en la pagina 

Página de React: https://reactjs.org/

Red de Distribución de Contenidos o CDN (Content Delivery Network en inglés): https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos

CDN de React: https://reactjs.org/docs/cdn-links.html

### Hola Mundo!

Parar empezar con React creamos un saludo, con react puedes crear etiquetas del html directamente, asi como componentes de React(pero este los veremos despues). 
Usamos `const "ElementoACrear" = React.createElement('etiqueta', {atributos}, contenido);`, para luego ver ese contenido que creamos usamos `ReactDOM.render('elementoCreado', document.getElementById('Id'));`.

Todo el manejo de React se hace mediando la etiqueta Script o en un documento de JS, El ejemplo siguente es para un simple Hola mundo.

~~~~
<script>
    const h1 = React.createElement('h1', {className: 'claseReactCss'},'Hello World');
    ReactDOM.render(h1, document.getElementById('root'));
</script>
~~~~

### JSX

JSX significa 'JavaScript XML'.

JSX sirve para combinar el HTML y JS En uno solo, sin embargo este solo es para trabajar con React de una manera mas comoda, otro pero, es que JSX no compila por si solo en un navegador, por ello usamos [**Babel**](https://babeljs.io).

Con este se puede compilar el JSX, pero aun así no seria lo mas indicado para un proyecto en produccion ya que [**Babel**](https://babeljs.io) es muy pesado de por si.

Lo mas indicado para un proyecto en produccion seria convertir todo el JSX en JS mediante la terminal y el [compilador](#pasos-para-compilar-localmente), de tal manera que el navegador pueda leer el JS y ejecutarlo.

Página de Babel: https://babeljs.io/

#### Pasos para compilar localmente: 

1. `npm init -y`
2. `npm install babel-cli@6 babel-preset-react-app@3`
3. `npx babel --watch <origen> --out-dir <destino> --presets react-app/prod`

Paquetes usados de npm:

- https://www.npmjs.com/package/babel-cli
- https://www.npmjs.com/package/babel-preset-react-app

Si deseas utilizar un CDN para Babel, puedes usar UNPKG que es recomendado en esta página de Babel:

- https://babeljs.io/docs/en/babel-standalone

- https://unpkg.com/browse/babel-standalone/babel.min.js

Otra opción es CDNJS:

- https://cdnjs.com/libraries/babel-standalone

### Virtual Dom & Fiber

React es una libreria muy eficiente ya que cuenta con un DOM virtual, el Virtual DOM.

lectura avanzada sobre Inmutabilidad:

https://dev.to/khriztianmoreno/que-es-la-inmutabilidad-29cn