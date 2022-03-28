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