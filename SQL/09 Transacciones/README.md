# Notas Masterclass SQL

## Transacciones

### Transacciones

__Ejemplo:__

~~~
CREATE TABLE IF NOT EXISTS balances (
	id SERIAL PRIMARY KEY,
	usuario varchar(255) DEFAULT NULL,
	balance int NOT NULL
);
INSERT INTO balances (usuario, balance) VALUES 
('Jeff Bezos', 1002),
('Elon Musk', 1001),
('Bill Gates', 1000);

SELECT * FROM balances;

BEGIN;
UPDATE balances SET balance = balance - 100.00
	WHERE usuario = 'Jeff Bezos';
UPDATE balances SET balance = balance + 100.00
	WHERE usuario = 'Elon Musk';
COMMIT;
~~~


### Concurrencia

Asegurarse de incluir todas las transacciones que dependan unas de otras para proteger la integridad de los datos.

__Ejemplo:__

~~~
~~~

### Rendimiento

__Ejemplo:__

Juntar todas las transacciones una sola ayuda al rendimiento de la base de datos.

~~~
SELECT * FROM balances;

BEGIN;
UPDATE balances SET balance = balance + 100.00 WHERE usuario = 'Jeff Bezos';
UPDATE balances SET balance = balance - 100.00 WHERE usuario = 'Jeff Bezos';
UPDATE balances SET balance = balance + 100.00 WHERE usuario = 'Jeff Bezos';
UPDATE balances SET balance = balance - 100.00 WHERE usuario = 'Jeff Bezos';
COMMIT;
~~~

### Revertir

Revertir o Rollback se utiliza mucho cuando se quiere regresar nuestros datos a un estado previo por cualquier error.

__Ejemplo:__

~~~
SELECT * FROM balances;

BEGIN;
UPDATE balances SET balance = balance - 100.00
    WHERE usuario = 'Jeff Bezos';
SAVEPOINT pago_elon
UPDATE balances SET balance = balance + 100.00
    WHERE usuario = 'Elon Musk';
ROLLBACK pago_elon 
UPDATE balances SET balance = balance + 100.00
    WHERE usuario = 'Bill Gates';
COMMIT;
~~~
