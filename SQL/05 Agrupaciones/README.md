# Notas Masterclass SQL

## Agrupaciones

### Agregados

Más detalles sobre GROUP BY y HAVING aquí:

https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP

__Ejemplo:__

~~~
SELECT COUNT(*) FROM usuarios;

SELECT pais, COUNT(*) 
	FROM usuarios
	GROUP BY pais;
	
SELECT pais, COUNT(*) AS numero
	FROM usuarios
	GROUP BY pais
	ORDER BY numero DESC;
	
SELECT pais, COUNT(*) AS numero
	FROM usuarios
	WHERE
	GROUP BY pais
	HAVING COUNT(*) >= 15
	ORDER BY numero DESC;
~~~

### Funciones Agregadas

Más funciones agregadas aquí:

https://www.postgresql.org/docs/13/functions-aggregate.html

__Ejemplo:__

~~~
SELECT * FROM usuarios;

SELECT COUNT(*) FROM usuarios;
SELECT AVG(edad) FROM usuarios;
SELECT MIN(edad) FROM usuarios;
SELECT MAX(edad) FROM usuarios;
SELECT SUM(edad) FROM usuarios;

SELECT pais, COUNT(*) FROM usuarios GROUP BY pais;
SELECT pais, AVG(edad) FROM usuarios GROUP BY pais;
SELECT pais, MIN(edad) FROM usuarios GROUP BY pais;
SELECT pais, MAX(edad) FROM usuarios GROUP BY pais;
SELECT pais, SUM(edad) FROM usuarios GROUP BY pais;

~~~

### Agrupar distintos

__Ejemplo:__

~~~
SELECT COUNT(*) FROM usuarios;
SELECT pais FROM usuarios;
SELECT DISTINCT pais FROM usuarios;
SELECT COUNT(DISTINCT pais) FROM usuarios;
~~~
