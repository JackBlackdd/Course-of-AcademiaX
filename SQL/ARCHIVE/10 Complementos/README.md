# Notas Masterclass SQL

## Complementos

### Gatillos

La página oficial de PostgreSQL contiene detalles más técnicos de gatillos o TRIGGERS que no tienes que memorizar pero vale la pena traducirlos y leerlos:

https://www.postgresql.org/docs/12/plpgsql-trigger.html

__Ejemplo:__

~~~
CREATE TABLE empleados (
    empleado text PRIMARY KEY,
    salario integer
);

SELECT * FROM empleados;

INSERT INTO empleados (empleado, salario) VALUES ('David Lebón', 100);

SELECT * FROM empleados;

CREATE TABLE auditoria_empleados (
    operación char(1) NOT NULL,
	momento timestamp NOT NULL,
    usuario text NOT NULL,
    empleado text NOT NULL,
    salario integer
);

SELECT * FROM auditoria_empleados;

CREATE OR REPLACE FUNCTION auditar() RETURNS TRIGGER AS $auditar_empleados$
    BEGIN
        IF (TG_OP = 'DELETE') THEN
            INSERT INTO auditoria_empleados SELECT 'D', now(), empleado, OLD.*;
        ELSIF (TG_OP = 'UPDATE') THEN
            INSERT INTO auditoria_empleados SELECT 'U', now(), empleado, NEW.*;
        ELSIF (TG_OP = 'INSERT') THEN
            INSERT INTO auditoria_empleados SELECT 'I', now(), empleado, NEW.*;
        END IF;
        RETURN NULL;
    END;
$auditar_empleados$ LANGUAGE plpgsql;

CREATE TRIGGER auditar_empleados
AFTER INSERT OR UPDATE OR DELETE ON empleados
    FOR EACH ROW EXECUTE FUNCTION auditar();

INSERT INTO empleados (empleado, salario) VALUES ('Pedro Aznar', 100);
INSERT INTO empleados (empleado, salario) VALUES ('Oscar Moro', 100);
UPDATE empleados SET salario = 200 WHERE empleado = 'David Lebón';
DELETE FROM empleados WHERE empleado = 'Pedro Aznar';
~~~

### Subelecciones

Consultas que hacemos a una tabla anidada

__Ejemplo:__

~~~
SELECT id, nombre AS producto FROM productos WHERE precio_usd > 100

SELECT * FROM 
	(SELECT id, nombre AS producto FROM productos WHERE precio_usd > 100) AS p
	INNER JOIN usuarios
	ON p.id = usuarios.id;
~~~

### Vistas

Puedes ver más sobre Vistas o VIEWS en la documentación oficial:

https://www.postgresql.org/docs/12/sql-createview.html

__Ejemplo:__

~~~
CREATE VIEW productos100 AS
    SELECT id, nombre AS producto FROM productos WHERE precio_usd > 100

SELECT * FROM 
	productos100 AS p
	INNER JOIN usuarios
	ON p.id = usuarios.id;
	
DROP VIEW IF EXISTS productos100;
~~~

### Indices

Los índices se utilizan para acelerar la búsqueda en una base de datos. 

https://www.postgresql.org/docs/9.1/indexes.html

Los indices tambien pueden ser agrupados y no agrupados. Mas detalles en este blog:

https://www.sqlshack.com/es/cual-es-la-diferencia-entre-indices-agrupados-y-no-agrupados-en-sql-server/