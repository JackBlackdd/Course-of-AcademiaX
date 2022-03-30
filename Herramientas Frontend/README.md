# Notas Masterclass Herramientas Frontend

## Herramientas

Aprende sobre las herramientas más utilizadas en el desarrollo de páginas web y apps en el lado del cliente.

### La Terminal

Consola vs Terminal vs Shell vs CLI 💻 ¿Qué es la terminal?

https://youtu.be/1YxHXBsVNGQ

También puedes ver una hoja de trucos para Bash con los comandos más comunes:

https://www.educative.io/blog/bash-shell-command-cheat-sheet

Y una para powershell si usas Windows:

https://www.comparitech.com/net-admin/powershell-cheat-sheet/

Si trabajas en WIndows y hacer tu vida más fácil, considera instalar WSL (Subsistema de Linux para Windows) para tener acceso a muchos comandos que funcionan en Mac y Linux:

https://docs.microsoft.com/es-es/windows/wsl/install

### Git

comandos de git

- `git init` Inicializa git para guardar todos los cambios de un proyecto
- `git status` Nos da el estado actual del proyecto en git
- `git add` Es para añadir los archivos que queramos guardar
- `git add .` permite añadir todos los archivos para guardar

- `git commit -m <file>` asi se sube un commit con los cambios que querramos subir
- `git checkout <file>` Para descartar cambios de un add
- `git dif` Es para ver la diferencia entre commits hechos
- `git log` es para ver todos los commits hechos
- `git branch -m <main>` Es para crear o escoger la rama a donde se subira el commit
- `git remote add origin <Link>` es para escoger el repositorio remoto
- `git push` es para subir un el commit a la rama elegida

**Página Oficial de Git:**

https://git-scm.com/

**Clientes con GUIs de Git:** Estas son aplicaciones que te permiten usar Git de una manera más visual sin utilizar la terminal.

https://git-scm.com/downloads/guis

También hay plugins de Git para los IDEs. Si usas VSCode considera usar:

https://code.visualstudio.com/docs/editor/versioncontrol

### GitHub

**Página Oficial de GitHub:**

https://github.com/

**Alternativas a GitHub:** Algunas alternativas populares son Gitlab y Bitbucket que también te permiten guardar repositorios en la nube gratuitamente y hay muchas opciones más que puedes ver en este blog.

https://itsfoss.com/github-alternatives/
 

 ### npm

 npm 'node package manager' Es un administrador de paqueterias, inicialmente hecho para node.js, pero actualmente ahora tiene mucha importancia en el diseño frontend con los servicios css.

 Para crear tu propia libreria se usa ``npm init`` el cual continua con una serie de preguntas para crear un *package.json* el cual, tiene las dependencias cargadas de forma local

Para instalar librerias usamos `npm install <namePackage>` y se instalaran las librerias de forma local en donde estemos asignando

**Página Oficial de npm:**

https://www.npmjs.com/

Otra opción muy popular para administrar tus librerías en el frontend es yarn:

https://yarnpkg.com/

#### npm - Librerias de CSS

Para cargar las librerias de css, instalamos la libreria de normalize.ccs por ejemplo de la siguiente manera.

~~~~
PS C:\Users\PC\~~~\Course-of-AcademiaX\> npm i normalize.css
// 'i' es la abreviación de 'install'
----------Resultado----------
added 1 package, and audited 2 packages in 1s
found 0 vulnerabilities
~~~~

Y luego la cargamos en el html

~~~~
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
    ----------Codigo por debajo----------
<head>
~~~~
Ahora tenemos la libreria de normalize.css de forma local

#### npm - Librerias de JS

Para cargar las librerias de Js, instalamos la libreria de por ejemplo de la siguiente manera.


### Webpack

Es una herramienta para 

### Netlify

Para ser muy técnicos:

- Los dominios se compran a través de registradores de dominios como GoDaddy.
- Los registradores de dominio mantienen los registros de nombres del servidor como academia-x.com
- Los servidores de nombres guardan registros DNS.
- Los registros DNS indican a los navegadores web y a los clientes de correo electrónico dónde dirigir la consulta.

Hay muchísimos registradores de dominios como GoDaddy con precios muy variables. Aquí hay otras opciones:

https://www.websitetooltester.com/es/blog/dominios-baratos/

#### Pipelines

Recuerda que todos estos servicios han sido creados por personas y empresas y van a haber muchísimas más opciones que suelen realizar funciones similares y a veces tratan de realizar más de una función. Por ejemplo, GitHub Pages es parte de GitHub y tiene sus propios pipelines.

### Que sigue despues?


Felicidades por haber completado este mini curso de Herramientas Frontend! 🎉 

Hemos cubierto muchísimo y ahora ya puedes llevar a tus proyectos a otro nivel con estas herramientas. 🙌🏽

Qué se viene después de esto?

Mi recomendación después de este curso es que crees varios proyectos que puedes incluir en tu portafolio. Aquí te dejo algunas ideas:

1. Una calculadora con HTML, CSS, y JavaScript

2. Una galería de fotos con React

3. Un pequeño videojuego con Phaser

4. Un par de páginas web para el negocio de amigos o un familiar

Después de ganar más experiencia con esto proyectos y tener tu portafolio listo, puedes preparar tu hoja de vida y empezar a aplicar a trabajos que pidan las tecnologías que has aprendido. Prepárate muy bien estudiando y revisando otros recursos en línea.

Este no es un curso exhaustivo así que puedes aprender más revisando la documentación oficial y ganando experiencia en proyectos profesionales. Cada proyecto es único y traerá nuevos retos! No tienes que memorizar todo y ya tienes los recursos para investigar cuando tengas dudas. También tienes acceso continuo a estos videos y puedes regresar a verlos en el futuro. Este es un CURSO VIVO así que tendrá actualizaciones a lo largo del tiempo.

Para crear aplicaciones web te recomiendo aprender frameworks como React, Angular, Svelte, o Vue.js. Si no estás registrad@ todavía, el siguiente paso es tomar el curso de React en el que aprenderás a crear aplicaciones para la web.

Espero verte en el siguiente curso y gracias por ser parte de Academia X! 🙂💯