## Notas Masterclass DOM

## Eventos

### Eventos

En javascript hay un concepto llamado evento qe se utiliza para referirse al instante justo en el que ocurre un determunado suceso. Por ejemplo, existe un evento llamado click que se dispara cuando un usario hace click sobre un objeto de HTML. Podemos decirle al navegador que cuando ocurra un evento concreto realice una accion determinada.

Para visualizar todos los eventos que suceden en el navegador en tiempo real podemos usar `monitorEvents(document)`

```
monitorEvents(document);
```

### Escuchar a eventos

La forma de responder ante estos eventos es con `addEventListener()` de esta forma `addEventListener()` escucha que evento se usara y de ahi dara una respuesta, por ejemplo un callback...

```
document.addEventListener('click') () => {
    console.log('recibí un click');
}
```

Otro ejemplo seria

```
document.queryElement('img.class').addEventListener('click', () => {
    document.querySelector('img.class').style.transform = 'scale(1.5)';
    /* Este codigo escucha cuando se de un click en una imagen de clase .class y entonces transformara el tamaño de la / imagen clickeada a 1.5 */
})
```

### Burbujeo

Como funcionan los eventos que se activan al mismo tiempo o se solapan entre si? bueno..
El DOM, va por fases para poder trabajar con los eventos, la primera fase(captura) empieza donde el DOM va de padre hasta el hijo para ver que elemento tiene un evento, la segunda fase(callback) consiste en tener el evento que se solicito tras accionarse el evento y la ultima fase(bubbles) es el retorno del evento, desde la imagen hasta el document

```
document.queryElement('img').addEventListener('click', () => {
    console.log('Click en la imagen');
}
document.queryElement('body').addEventListener('click', () => {
    console.log('Click en el body');
}
document.addEventListener('click', () => {
    console.log('Click en el documento');
}
Resultado:
Click en la imagen
Click en el body
Click en el documento
```

El evento acciona en la fase de burbujeo, pero esto puede ser modificable de la siguiente manera

```
document.queryElement('img').addEventListener('click', () => {
    console.log('Click en la imagen');
},true);
document.queryElement('body').addEventListener('click', () => {
    console.log('Click en el body');
}, true);
document.addEventListener('click', () => {
    console.log('Click en el documento');
}, true);
```

Lo que sucede en el ejemplo es que se modifico el momento de disparo del evento a la primera fase, en el momento de captura.

```
Resultado: // El resultado se imprimio al reves
Click en la imagen
Click en el body
Click en el documento
```

### El objeto evento

Algo especial de los eventos, es el propio evento, tambien tiene metodos y propiedades las cuales puedo imprimir asi...

```
document.queryElement('img').addEventListener('click', evento => {
    console.log('Click en la imagen', evento);
});
Resultado:
Click en la imagen
PointerEvent{parametros}
atributos: propiedades // Aqui nos arrija toda la información proveniente del evento
```

### Parar propagacion

Tambien hay una manera para detener el efecto de burbujeo utilizamos `stopPropagation()`; de esta menera se evita el burbujeo y la solapacion de los eventos.

```
document.addEventListener('click', () => {
    console.log('Click en el documento');
});
document.queryElement('body').addEventListener('click', () => {
    console.log('Click en el body');
});
Resultado:
Click en el documento
Click en el body
```

Utilizando el metodo de la siguiente manera se obtiene un resultado menos general

```
document.queryElement('img').addEventListener('click', () => {
    console.log('Click en la imagen');
    evento.stopPropagation();
});
Resultado:
Click en la imagen // Funciona unicamente si presionas en la imagen, pero los otros 2 siguen funcionando si presionas en otro lado
```

### Prevenir el comportamiento predeterminado

Para resetear los valores predeterminado o evitar que se utilice el predeterminado es el metodo `preventDefault()`;

```
document.addEventListener('click', evento => {
    console.log(evento);
    evento.preventDefault();
},true);
```

Con el ejemplo anterior si un link se presionara, ahora ya no te lleveria a la pagina como usualmente hace, porque ha sido bloqueado

### carga

La carga de una pagina es muy importante por ello, por ende cuando mas rapido sea mejor, un evento del DOM es **DOMcontentLoaded** el cuanl se utiliza de la siguiente manera...

```
document.addEventListener("DOMContentLoaded", () => {
    console.log('Pagina Cargada por completo');
}); // El evento DOMcontentLoaded, no permite visualizar o interactuar con la pagina hasta que esta se haya cargado por completo
```

Aparte hoy en dia hay mejores maneras de cargar el código y es utilizando el atributo **defer** en la etiqueta `<script>` en el head en lugar del `<body>`. Puedes ver más detalles en esta respuesta de stack overflow:

https://stackoverflow.com/questions/10808109/script-tag-async-defer

La razón por la que se ha puesto al final del body por bastante tiempo es porque es más eficiente pero hoy en día se está estandarizando el uso del atributo `defer` que hace exactamente lo mismo y ya es bastante soportado en navegadores.

### Dejar de escuchar eventos

Cuando no queremos utlizar eventos podemos "silenciarlos" mediante le metodo `removeEventListener()`; esto puede ser usado para acciones de 1 sola vez, que se active escuche un evento una unica vez y luego borrar el evento para hacer memoria

```
fuction agrandar() {
    document.querySelector('img.class').style.transform = 'scale(1.5);
}
document.querySelector('img.class').addEventListener('click', agrandar); // Se acciona 1 vez el evento
document.querySelector('img.class').removeEventListener('click', agrandar); // Y luego se borra el evento
```
