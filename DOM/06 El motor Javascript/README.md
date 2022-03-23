## Notas Masterclass DOM

## El motor de JavaScript

### Pedidos

Los pedidos en el DOM se pueden observar desde la consola de el navegador, sin embargo, para cada navegador los pedidos funcionan de maneras diferentes, empiezan solicitando el html para luego convertirlo en el DOM, se puede visualizar los tiempos de carga de cada elemento y tambien existe una forma de estilizar el texto de manera que cargue mas rapido el documento, esto se llama "minificacion" y comprime todo el documento en una sola linea, asi haciendo tiempos de carga mas cortos.

### Web APIs

El DOM en realidad es una WEB API, el navegador tiene muchos mas APIs, si usamos ``this`` en la consola de un navegador podemos encontrar metodos, propiedades y WEB APIs, una que mejora el rendimiento de la pagina  usamos ``performance.now()``, otra caracteristica es la fragmentacion del DOM, en este podemos con ``createDocumentFragment()``, con este se crea un 'fragmento' del DOM el cual no se reenderiza hasta que se indique 

### La cola de callbacks

El eventLoop se integra de las **Web Apis**, el **callback queue** y el **callstack**, donde las Web Apis llaman una funcion ``callback()``; por ejemplo presionar un boton, la **web api** envia el callback al **callback queue** donde se hace una lista de todos los callbacks en cola, por ultimo son enviados al **callstack** donde son procesados uno por uno.

### Web APIs y la cola de callbacks

### La pila de llamadas

### Repintado y Reflujo

El repintado y el reflow, sucede cada que se edita la pagina y se vuelve a reescribir para darle forma otra vez, cada vez que se hace esto se hace requisicion de recursos del ordenador para que el navegador pueda hacer los cambios, esto es algo a tener en consideracion ya que no todos los ordenadores de nuestros posibles usuarios no seran PC games alta gama, por ende se tienen diferentes practicas para optimizar el reflow de un navegador, como por ejemplo juntar todos los cambios en un DOM virtual antes de subirlos, y luego solo tener un unico cambio que se actualice reduciendo tiempos de carga

### Depuracion