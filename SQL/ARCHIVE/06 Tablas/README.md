# Notas Masterclass SQL

## Tablas y esquemas

### Crear

Recuerda que es esquema es el plano o diseño de la tabla. Y la table es ese diseño puesto en práctica con datos reales.

__Ejemplo:__

~~~
CREATE TABLE prueba (
  numero int,
  texto text
);

INSERT INTO prueba VALUES ( 20, 'veinte' );
INSERT INTO prueba VALUES ( 40, 'cuarenta' );
INSERT INTO prueba VALUES ( 80, 'ochenta' );

SELECT * FROM prueba;
~~~

### Borrar

__Ejemplo:__

~~~
DROP TABLE prueba;
DROP TABLE IF EXISTS prueba;
~~~

### Copiar

__Ejemplo:__

~~~
CREATE TABLE prueba (
  numero int,
  texto text
);

SELECT * FROM prueba;

INSERT INTO prueba DEFAULT VALUES;
INSERT INTO prueba ( numero, texto ) SELECT id, usuario FROM usuarios;
~~~

### Nulo

__Ejemplo:__

~~~
CREATE TABLE prueba (
  numero int NOT NULL,
  texto text NOT NULL
);
~~~

### Restricciones 

La documentación oficial muestra más restricciones que puedes indicar en tu esquema:

https://www.postgresql.org/docs/13/ddl-constraints.html

Revisa la diferencia entre restricciones de columna y restricciones de tabla para situaciones más únicas.

__Ejemplo:__

~~~
CREATE TABLE prueba (
  id int UNIQUE NOT NULL,
  numero int DEFAULT 10,
  texto text NOT NULL
);

INSERT INTO prueba ( id, numero, texto ) VALUES (1, 5, 'texto');
~~~


### Alterar Esquema

__Ejemplo:__

~~~
ALTER TABLE prueba ADD buleano bool;

ALTER TABLE prueba ADD texto2 text DEFAULT 'predeterminado';

ALTER TABLE prueba ALTER COLUMN texto2 TYPE varchar;

ALTER TABLE prueba DROP COLUMN buleano, DROP COLUMN IF EXISTS texto2;
~~~

### Clave primaria

__Ejemplo:__

~~~
DROP TABLE prueba;

CREATE TABLE prueba (
  id SERIAL PRIMARY KEY,
  texto text
);

INSERT INTO prueba ( texto ) VALUES ( 'veinte' );
INSERT INTO prueba ( texto ) VALUES ( 'cuarenta' );
INSERT INTO prueba ( texto ) VALUES ( 'ochenta' );
~~~