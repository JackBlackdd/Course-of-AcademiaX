# Notas Masterclass SQL

## CRUD

### Leer

Las oraciones de SQL pueden llegar a ser muy largas. La documentación oficial te muestra la forma de escribir consultas usando SELECT que pueden llegar a ser muy avanzadas.

https://www.postgresql.org/docs/9.3/sql-select.html

Este documento está en inglés y no necesitas memorizarlo. Es simplemente la "fuente de la verdad" cuando quieras obtener más información de la documentación oficial.

A SQL se lo divide frecuentemente en algunos subgrupos basado en sus funcionalidades como crear. Eventualmente veremos mas de estas funciones. Mas detalles en este blog:
https://rajhans-jadhao.medium.com/ddl-dml-dcl-and-tcl-in-psql-485b986d20f7

### Insertar

Usamos ``INSERT INTO`` para agregar valores a la tabla, seguidamente de donde se agregaran los valores y entre parentesis en que columas se agregaran los valores: *'usuarios (id, usuario, nombre, apellido, clave)'*
``VALUES`` se utliza para agregar los valores siguiendo el orden que declaramos anteriormente: *'(1000,  'Xavier', 'Reyes', 'qwerty')';*

__Ejemplo:__

~~~
INSERT INTO usuarios (id, clave) VALUES
(1001, 'qwerty2');
~~~

### Actualizar

Usamos ``UPDATE`` Para indicar que se actualizara una informacion seguido de la tabla a actualizar *'usuarios'*
``SET`` Indica las columnas en las que se actualizara la informacion *'usuario = 'programadorX'*.
``WHERE`` Seria el condicional para indicar cuando va actualizarce la tabla en dado caso que se cumpla la condicion: *'id = 1000;'*

__Ejemplo:__

~~~
UPDATE usuarios
    SET 
        usuario = 'hildabeast',
        nombre = 'Hilde',
        apellido = 'Clark'
    WHERE id = 1001;
~~~

### Borrar

Usamos `DELETE` para borrar datos de la tabla, sin embargo se debe establecer que elementos se orraran para evitar una eliminacion total de los datos.

`FROM` *usuarios* indica de que columna se borraran los datos.
`WHERE` *id >= 1000;* es la condicion a seguir para borrar los datos.

__Ejemplo:__ 
~~~
DELETE FROM usuarios WHERE id >= 1000;
~~~