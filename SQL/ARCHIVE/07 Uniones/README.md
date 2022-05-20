# Notas Masterclass SQL

## Uniones

### Uniones

Wikipedia tiene buenas explicaciones y ejemplos a detalle de JOINS o uniones incluyendo el CROSS join o cruzado:

https://es.wikipedia.org/wiki/Sentencia_JOIN_en_SQL

__Ejemplo:__

~~~
SELECT * FROM productos
	INNER JOIN usuarios 
	ON productos.usuario_id = usuarios.id;
	
SELECT p.nombre, u.nombre, u.apellido FROM productos AS p
	INNER JOIN usuarios AS u 
	ON p.usuario_id = u.id;
~~~

### Ejemplos

__Ejemplo:__
~~~
SELECT u.usuario, p.nombre, v.fecha FROM ventas AS v
	INNER JOIN productos AS p ON v.producto_id = p.id
	INNER JOIN usuarios AS u ON v.usuario_id = u.id;
~~~