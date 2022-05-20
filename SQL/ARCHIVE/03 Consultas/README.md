# Notas Masterclass SQL

## CRUD

### Contar


__Ejemplo:__

~~~
SELECT COUNT(*) FROM usuarios 
    WHERE nombre = 'david' AND apellido = 'john';
~~~

### Paginacion


__Ejemplo:__

~~~
SELECT id, nombre, apellido FROM usuarios 
    WHERE nombre = 'david'
    ORDER BY apellido DESC
    LIMIT 3 OFFSET 0;
~~~

### Filtros

__Ejemplo:__

~~~
SELECT * FROM paises 
    WHERE iso3 = 'AFG' 
	OR iso3 IS NULL
    ORDER BY codigo DESC;
	
SELECT * FROM paises 
    WHERE legible LIKE '%t_nia';
	
SELECT * FROM paises 
    WHERE legible IN ( 'Ecuador', 'Mexico' );
~~~

### Expresiones Condicionales


__Ejemplo:__

~~~
SELECT legible,
    CASE
        WHEN legible = 'Argentina' THEN 'che'
        WHEN legible = 'Mexico' THEN 'güey'
        ELSE 'pana' 
	END AS dude
FROM paises;
~~~

### Operadores numericos

SQL ofrece muchísimos más operadores y la documentación oficial muestra una tabla de otros operadores disponibles:

https://www.postgresql.org/docs/9.3/functions-math.html

__Ejemplo:__

~~~
SELECT 1 + 2;
SELECT 2 * 2;
SELECT 1 / 2;
SELECT 1.2::float / 2;
SELECT 1::float / 2;
SELECT 5 / 2;
SELECT 5 % 2;
~~~

### Distintos


__Ejemplo:__

~~~
SELECT * FROM usuarios WHERE nombre = 'david';

SELECT DISTINCT nombre, apellido FROM usuarios WHERE nombre = 'david';
~~~

### Ordenar

__Ejemplo:__

~~~
SELECT * FROM paises ORDER BY legible;
SELECT * FROM paises ORDER BY legible ASC;
SELECT * FROM paises ORDER BY legible DESC;
SELECT legible FROM paises ORDER BY codigo, legible DESC;
~~~