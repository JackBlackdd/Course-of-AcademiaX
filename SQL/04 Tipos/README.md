# Notas Masterclass SQL

## Tipos

### Tipos de datos

Puedes ver todos los tipos de datos para PostgreSQL aquí:

https://www.postgresql.org/docs/14/datatype.html

### Texto

En la documentación oficial de PostgreSQL puedes ver todos los operadores que existen para texto con ejemplos:

https://www.postgresql.org/docs/9.3/functions-string.html

__Ejemplo:__

~~~
SELECT 'Hello World';
SELECT 'Hello'' World';
SELECT 'Hello' || 'World';
SELECT CONCAT('Hello','World');

SELECT LENGTH('Hello World');
SELECT nombre, LENGTH(nombre) FROM usuarios;

SELECT TRIM('   Hello World  ');
SELECT LTRIM('   Hello World  ');
SELECT RTRIM('   Hello World  ');
SELECT TRIM('---Hello World---', '-');

SELECT UPPER('Hello World');
SELECT LOWER('Hello World');

SELECT SUBSTR('Hello World',2,2);
~~~

### Numeros

En la documentación oficial puedes ver todos los datos con los que puedes trabajar que son de tipo numérico y el tamaño que ocupan en bytes:

- https://www.postgresql.org/docs/9.3/datatype-numeric.html

__Ejemplo:__

~~~
SELECT 100;
SELECT 100.0;
SELECT 2147483647;
SELECT 2147483648;
~~~

SQL ofrece muchísimas más funciones y la documentación oficial muestra una tabla de todas las funciones disponibles:

- https://www.postgresql.org/docs/9.3/functions-math.html

__Ejemplo:__

~~~
SELECT 3.2345234;
SELECT ROUND(3.2345234);
SELECT ROUND(3.5345234);
SELECT ROUND(3.2345234, 2);
~~~

### Boleanos

El tipo booleano tan solo ocupa un byte en la memoria. Esto es porque es simplemente un 0 o un 1. Es lo más básico posible!

https://www.postgresql.org/docs/9.3/datatype-boolean.html

__Ejemplo:__

~~~
SELECT true;
SELECT false;
SELECT true AND false;
SELECT true OR false;
SELECT 1 = 1;
~~~

### Tiempo

La documentación oficial incluye más información sobre datos para tiempo y fecha:

https://www.postgresql.org/docs/9.3/datatype-datetime.html

También puedes leer más sobre el formato estandarizado de fechas y tiempos ISO 8601:

https://es.wikipedia.org/wiki/ISO_8601

__Ejemplo:__

~~~
SELECT '2001-10-05';
SELECT date '2001-10-05';
SELECT date 'now';
SELECT time 'now';
SELECT timestamp '2001-10-05';
SELECT timestamp 'now';
SELECT timestamp with time zone 'now';
SELECT timestamp 'now' at time zone 'utc';
SET timezone TO 'utc';
SET timezone TO 'gmt+7';
~~~

### TypeOf

Al igual que PG_TYPEOF, hay muchas funciones del sistema que no son muy utilizadas pero pueden ser útiles en situaciones únicas:

https://www.postgresql.org/docs/9.3/functions-info.html

__Ejemplo:__

~~~
SELECT PG_TYPEOF(100);
SELECT PG_TYPEOF(100.0);
SELECT PG_TYPEOF('texto');
SELECT PG_TYPEOF('texto'::text);
SELECT PG_TYPEOF(nombre) FROM usuarios;
~~~
