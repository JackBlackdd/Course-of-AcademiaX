# Notas Masterclass HTML

## Proceso

### Proceso

Más detalles sobre el objeto global proceso:

https://nodejs.org/dist/latest/docs/api/process.html

Te dejo un documento con detalles más avanzados sobre los detalles de como Node.js funciona internamente con el motor V8, eventos, y el concepto del proceso de un solo hilo:

https://dev.to/denispixi/que-es-node-js-y-como-funciona-46ck

### Salir

### Standar I/O

Para que tengas una idea de videojuegos de los 80s, te comparto este video de un juego que yo jugaba de niño. Se llamaba Police Quest y durante el juego interactuabas con la consola de una manera muy similar a la teoría de este video:

https://www.youtube.com/watch?v=UqosCPJt5Gk

### Argumentos

Los argumentos de la línea de comandos son cadenas de texto que se utilizan para pasar información adicional a un programa cuando se ejecuta una aplicación a través del interfaz de línea de comandos (CLI) de un sistema operativo. Los argumentos de la línea de comandos suelen incluir información que se utiliza para establecer la configuración o los valores de propiedad de una aplicación.

La forma más sencilla de recuperar argumentos en Node.js es a través del process.argv formación. Este es un objeto global que puede usar sin importar bibliotecas adicionales para usarlo. Simplemente necesita pasar argumentos a una aplicación Node.js, tal como mostramos anteriormente, y se puede acceder a estos argumentos dentro de la aplicación a través del process.argv formación.